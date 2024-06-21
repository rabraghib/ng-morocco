import { DatabaseItem } from '../models/video';

async function readDatabase(): Promise<Partial<DatabaseItem>[]> {
  try {
    return (await import('../generated/db.json')).default;
  } catch (e) {
    console.error('Error while reading database file', e);
    throw e;
  }
}

export async function getDBVideoContent(
  videoId: string,
): Promise<Partial<DatabaseItem>> {
  const db = await readDatabase();
  return (
    db.find(
      (video) => video.videoId?.toLowerCase() === videoId.toLowerCase(),
    ) || { videoId }
  );
}
