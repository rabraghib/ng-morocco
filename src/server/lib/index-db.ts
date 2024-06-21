import algoliasearch from 'algoliasearch';
import { DatabaseItem } from '../models/video';
import { getConstants } from './constants';

export async function indexDb(data: DatabaseItem[]) {
  try {
    const constants = await getConstants();
    const client = algoliasearch(
      constants.ALGOLIA_APP_ID,
      constants.ALGOLIA_APP_KEY,
    );
    const index = client.initIndex(constants.ALGOLIA_INDEX_NAME);

    const records = data
      .map(({ video, videoId, metadata }) =>
        metadata?.chapters?.map((chapter) => ({
          objectID: `${videoId}_${chapter.start}`,
          ...chapter,
          session: {
            videoId,
            ...(metadata || video?.items?.[0].snippet || {}),
            chapters: undefined,
          },
        })),
      )
      .filter((object) => !!object)
      .flat();
    index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  } catch (e) {
    console.log(e);
  }
}
