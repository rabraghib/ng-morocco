import * as path from 'path';
import * as fs from 'fs';
import fg from 'fast-glob';
import fm from 'front-matter';
import { ServerSecrets } from './models/generated';
import fsExtra from 'fs-extra';
import { DatabaseItem, VideoMetadata } from './models/video';
import { getPlaylist, getVideo } from './lib/youtube-api';
import { indexDb } from './lib/index-db';
import { PlaylistItem, PlaylistItemSnippet } from '../app/core/models';

const root = path.resolve(__dirname, '../..');
const generatedDir = path.resolve(root, 'src/server/generated');
const videosDir = path.resolve(root, 'content/videos');
const dbPath = path.resolve(generatedDir, 'db.json');
const secretsPath = path.resolve(generatedDir, 'secrets.json');

export async function prepareDatabaseAndSecrets() {
  await fsExtra.mkdirp(generatedDir);

  await prepareSecrets();
  await prepareDatabase();
}

async function prepareSecrets() {
  const secrets: ServerSecrets = {
    YOUTUBE_PLAYLIST_ID: process.env['YOUTUBE_PLAYLIST_ID'] || '',
    GOOGLE_API_KEY: process.env['GOOGLE_API_KEY'] || '',
    ALGOLIA_APP_ID: process.env['ALGOLIA_APP_ID'] || '',
    ALGOLIA_APP_KEY: process.env['ALGOLIA_APP_KEY'] || '',
    ALGOLIA_INDEX_NAME: process.env['ALGOLIA_INDEX_NAME'] || '',
  };

  if (Object.values(secrets).some((v) => !v)) {
    console.warn(
      'Plz recheck your environment variables if they are set correctly',
    );
  }

  await fsExtra.writeJson(secretsPath, secrets, { spaces: 2 });
  console.log('Preparing secrets ✅');
}

async function prepareDatabase() {
  if (await fsExtra.pathExists(dbPath)) {
    console.log('Database already generated ✅');
    return;
  }

  try {
    const playlist = await getPlaylist();
    const videoIds: string[] = [];

    for (const item of playlist.items ?? []) {
      const videoId = item.snippet?.resourceId?.videoId;
      if (videoId) {
        videoIds.push(videoId);
        prepareMetadata(videoId, item);
      }
    }

    console.log(`----------------------------------`);

    const db: DatabaseItem[] = [];
    await Promise.all(
      videoIds.map(async (videoId) => {
        const video = await getVideo(videoId);
        const metadata = getVideoMetadata(videoId);
        if (!metadata) {
          return;
        }
        db.push({
          videoId,
          video,
          metadata: metadata,
        });
      }),
    );

    fsExtra.writeJson(dbPath, db, (err) => {
      if (err) return console.error(err);
      console.log('Preparing database ✅');
    });

    await indexDb(db);
    console.log('Indexing database ✅');
  } catch {
    console.log('Guess what, it did not work ❌');
  }
}

function getVideoMetadata(videoId: string): VideoMetadata | undefined {
  try {
    const [chaptersFile, videoFile] = fg.sync(
      [`*-${videoId}/chapters.json`, `*-${videoId}/index.md`],
      {
        cwd: videosDir,
        caseSensitiveMatch: false,
      },
    );
    if (videoFile) {
      const video = fs.readFileSync(path.resolve(videosDir, videoFile), 'utf8');
      const chapters = fsExtra.readJsonSync(
        path.resolve(videosDir, chaptersFile),
        'utf8',
      );
      const fmData = fm<any>(video);
      return {
        ...fmData.attributes,
        description: fmData.body,
        chapters,
        videoFile,
        chaptersFile,
      };
    }
    return undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function prepareMetadata(videoId: string, video: PlaylistItem) {
  const snapshot = video.snippet;
  if (!snapshot) {
    throw new Error('No video snapshot found');
  }
  const position = new String((snapshot?.position ?? 0) + 1).padStart(3, '0');
  const folder = path.resolve(videosDir, `${position}-${videoId}`);
  try {
    fs.accessSync(folder, fs.constants.F_OK);
  } catch (e) {
    const existingFolders = fg.sync(`*-${videoId}`, {
      cwd: videosDir,
      caseSensitiveMatch: false,
      onlyDirectories: true,
    });
    if (existingFolders.length > 0) {
      // TODO: maybe just ignore it without renaming?
      console.log(`Renaming ${existingFolders[0]} to ${folder}`);
      fs.renameSync(path.resolve(videosDir, existingFolders[0]), folder);
      return;
    }

    console.log(`Generating ${folder}`);
    fsExtra.mkdirpSync(folder);
    fsExtra.writeFile(
      path.resolve(folder, 'chapters.json'),
      '[]',
      (err: any) => {
        if (err) return console.error(err);
      },
    );
    fsExtra.writeFile(
      path.resolve(folder, 'index.md'),
      markdownTemplate(snapshot),
      (err) => {
        if (err) return console.error(err);
      },
    );
  }
}

function markdownTemplate(video: PlaylistItemSnippet) {
  return `---
title: ${video?.title?.replace(/ - Angular in Darija/gi, '') ?? ''}
---

${video.description ?? ''}

`;
}
