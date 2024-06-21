import { DatabaseItem } from './video';

export type ServerSecrets = {
  YOUTUBE_PLAYLIST_ID: string;
  GOOGLE_API_KEY: string;
  ALGOLIA_APP_ID: string;
  ALGOLIA_APP_KEY: string;
  ALGOLIA_INDEX_NAME: string;
};

export type Database = DatabaseItem[];
