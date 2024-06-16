import { PageServerLoad } from '@analogjs/router';
import { VideoItem } from '../../core/models';
import { timeToSeconds } from '../../shared/helpers/time';
import { DATA } from '../playlist.server';

const data = {
  kind: 'youtube#video',
  etag: '0QuljgN07KdpiugY15pr_XN7zMw',
  id: 'rT0FUs7uUks',
  snippet: {
    publishedAt: '2020-06-14T10:26:24Z',
    channelId: 'UC5irZcpXt3LZ4Ra44aFX_eA',
    title: 'Getting Started - Angular In Darija',
    description:
      "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih",
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/rT0FUs7uUks/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/rT0FUs7uUks/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/rT0FUs7uUks/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/rT0FUs7uUks/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/rT0FUs7uUks/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    channelTitle: 'ngMorocco',
    categoryId: '24',
    liveBroadcastContent: 'none',
    localized: {
      title: 'Getting Started - Angular In Darija',
      description:
        "In this interactive series we're going to explain and demystify Angular Core Concepts through practical live-coding and deep dive into understanding theory.\n\nWe will pick and answer attendees' questions on the fly.\n\nEverything in Darija\n\nPresented by; \n- Chihab Otmani  https://twitter.com/chihabotmani\n- Ilyas Elfouih  https://twitter.com/elfouih",
    },
  },
  statistics: {
    viewCount: '6343',
    likeCount: '231',
    // favoriteCount: '0',
    commentCount: '21',
  },
  meta: {
    title: 'Getting Started',
    tags: ['introduction', 'getting started', 'file structure'],
    category: 'Lessons',
    description:
      'During this session, as an introduction to the series, we briefly presented the history of Angular and then discussed the state of the Moroccan market regarding the adoption of Angular.\n\nThen, we explained the structure of a CLI project, introduced the notion of component and finally we answered the questions of the audience.\n\n# Panel\n\n[Chihab Otmani](https://twitter.com/chihabotmani)\n\n[Ilyas Elfouih ](https://twitter.com/elfouih)\n',
    chapters: [
      {
        title: 'Introduction to the Series',
        start: '03:07',
        end: '05:55',
        tags: ['nutshell'],
      },
      {
        title: 'The History of Angular',
        start: '05:55',
        end: '14:20',
        tags: ['nutshell', 'creation'],
      },
      {
        title: 'Angular in Morocco',
        start: '14:20',
        end: '20:42',
        tags: ['morocco', 'job', 'offers'],
      },
      {
        title: 'What is a Single Page Application?',
        start: '20:42',
        end: '27:16',
        tags: ['nutshell', 'definition'],
      },
      {
        title: 'Single Page Applications and SEO',
        start: '27:16',
        end: '28:58',
        tags: ['nutshell', 'seo', 'ssr'],
      },
      {
        title: 'Angular for Backend developers',
        start: '29:00',
        end: '30:35',
        tags: ['nutshell', 'java', 'c#', 'python', 'php'],
      },
      {
        title: 'SPA and routing in a nutshell',
        start: '30:35',
        end: '40:38',
        tags: ['nutshell'],
      },
      {
        title: 'Introduction to components',
        start: '40:38',
        end: '47:13',
        tags: ['beginner', 'components'],
      },
      {
        title: 'How data-binding works?',
        start: '47:13',
        end: '50:13',
        tags: ['intermediate', 'data-binding'],
      },
      {
        title: 'Declaring components',
        start: '50:13',
        end: '55:55',
        tags: ['beginner', 'components'],
      },
      {
        title: 'Why do we need modules?',
        start: '55:55',
        end: '01:01:08',
        tags: ['advanced', 'modules'],
      },
      {
        title: 'Changing interpolation signs',
        start: '01:01:08',
        end: '01:05:40',
        tags: ['advanced', 'components', 'wassim chegham'],
      },
      {
        title: 'Angular CLI project structure',
        start: '01:05:40',
        end: '01:06:09',
        tags: ['intermediate', 'cli'],
      },
      {
        title: 'Angular dependencies',
        start: '01:06:09',
        end: '01:11:43',
        tags: ['intermediate', 'node', 'npm'],
      },
      {
        title: 'TSConfig target config',
        start: '01:11:44',
        end: '01:12:33',
        tags: ['intermediate', 'typescript', 'tsconfig'],
      },
    ],
    videoFile: '001-rT0FUs7uUks/index.md',
    chaptersFile: '001-rT0FUs7uUks/chapters.json',
  },
};
export const load = async ({ params }: PageServerLoad): Promise<VideoItem> => {
  const videoId = params?.['videoId'];
  if (!videoId) {
    throw new Error('Video id is required');
  }
  const result = {
    id: data.id,
    meta: {
      ...data.meta,
      chapters: (data.meta?.chapters || []).map((chapter) => ({
        ...chapter,
        startInSeconds: timeToSeconds(chapter.start),
        endInSeconds: timeToSeconds(chapter.end),
      })),
    },
    title: data.snippet?.title || '',
    description: data.snippet?.description || '',
    publishedAt: data.snippet?.publishedAt || '',
    thumbnailUrl: data.snippet?.thumbnails?.maxres?.url || '',
    statistics: {
      viewCount: data?.statistics?.viewCount,
      commentCount: data?.statistics?.commentCount,
      likeCount: data?.statistics?.likeCount,
      dislikeCount: null,
    },
    ...(DATA.find((item) => item.id === videoId) ?? {}),
  };
  result.meta.title = result.title;
  return result;
};
