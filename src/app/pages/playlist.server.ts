import { PageServerLoad } from '@analogjs/router';
import { VideoItem } from '../core/models';
import { getPlaylist } from '../../server/lib/youtube-api';

export const load = async (_: PageServerLoad): Promise<VideoItem[]> => {
  try {
    const data = await getPlaylist();
    const items = data?.items || [];
    return items
      .filter(
        (item) =>
          item.snippet &&
          item.snippet.resourceId &&
          item.snippet.resourceId.videoId &&
          item.snippet.thumbnails?.maxres?.url,
      )
      .map((item) => ({
        id: item.snippet!.resourceId!.videoId!,
        title: item.snippet!.title!.replace(/-.*/, ''),
        description: item.snippet!.description!,
        publishedAt: item.snippet!.publishedAt!,
        thumbnailUrl: item.snippet!.thumbnails!.maxres!.url!,
      }));
  } catch (e) {
    console.log(e);
    throw Error('Error while getting data from YT');
  }
};
