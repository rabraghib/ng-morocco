import { PageServerLoad } from '@analogjs/router';
import { VideoItem } from '../../core/models';
import { timeToSeconds } from '../../shared/helpers/time';
import { getVideo } from '../../../server/lib/youtube-api';
import { getDBVideoContent } from '../../../server/lib/database';

export const load = async ({ params }: PageServerLoad): Promise<VideoItem> => {
  const videoId = params?.['videoId'];
  if (!videoId) {
    throw new Error('Video id is required');
  }
  try {
    const { metadata, video: videoData } = await getDBVideoContent(videoId);
    const data = (await getVideo(videoId)).items?.[0] ?? videoData?.items?.[0];
    if (!data) {
      throw new Error('Video not found');
    }
    const extendedData = {
      ...data!,
      meta: metadata,
    };
    return {
      id: extendedData.id ?? videoId,
      meta: {
        ...extendedData.meta!,
        chapters: (extendedData.meta?.chapters || []).map((chapter: any) => ({
          ...chapter,
          startInSeconds: timeToSeconds(chapter.start),
          endInSeconds: timeToSeconds(chapter.end),
        })),
      } as any,
      title: extendedData.snippet?.title || '',
      description: extendedData.snippet?.description || '',
      publishedAt: extendedData.snippet?.publishedAt || '',
      thumbnailUrl: extendedData.snippet?.thumbnails?.maxres?.url || '',
      statistics: {
        viewCount: extendedData.statistics?.viewCount ?? null,
        commentCount: extendedData.statistics?.commentCount ?? null,
        likeCount: extendedData.statistics?.likeCount ?? null,
        dislikeCount: null,
      },
    };
  } catch (e) {
    console.log(e);
    throw new Error('Error while getting data from YT');
  }
};
