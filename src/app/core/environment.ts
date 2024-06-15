export const environment = {
  baseUrl: import.meta.env['VITE_BASE_URL'] as string,
  playlistId: import.meta.env['VITE_YOUTUBE_PLAYLIST_ID'] as string,
  algolia: {
    appId: import.meta.env['VITE_ALGOLIA_APP_ID'] as string,
    apiKey: import.meta.env['VITE_ALGOLIA_API_KEY'] as string,
    indexName: import.meta.env['VITE_ALGOLIA_INDEX_NAME'] as string,
  },
  application: {
    branch: import.meta.env['VITE_BRANCH_NAME'] as string,
    version: import.meta.env['VITE_VERSION'] as string,
    commit: import.meta.env['VITE_COMMIT_REF'] as string,
  },
};
