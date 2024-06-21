export async function getConstants() {
  let env = {
    YOUTUBE_PLAYLIST_ID: process.env['YOUTUBE_PLAYLIST_ID'],
    GOOGLE_API_KEY: process.env['GOOGLE_API_KEY'],
    ALGOLIA_APP_ID: process.env['ALGOLIA_APP_ID'],
    ALGOLIA_APP_KEY: process.env['ALGOLIA_APP_KEY'],
    ALGOLIA_INDEX_NAME: process.env['ALGOLIA_INDEX_NAME'],
  };

  try {
    env = await import('../generated/secrets.json');
  } catch (error) {}

  return {
    YOUTUBE_PLAYLIST_ID: env['YOUTUBE_PLAYLIST_ID'] || '',
    GOOGLE_API_KEY: env['GOOGLE_API_KEY'] || '',
    ALGOLIA_APP_ID: env['ALGOLIA_APP_ID'] || '',
    ALGOLIA_APP_KEY: env['ALGOLIA_APP_KEY'] || '',
    ALGOLIA_INDEX_NAME: env['ALGOLIA_INDEX_NAME'] || '',
  };
}
