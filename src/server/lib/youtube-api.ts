import fetch from 'node-fetch';
import {
  PlaylistItemListResponse,
  VideoListResponse,
} from '../../app/core/models';
import { getConstants } from './constants';

const apiBase = (path: string, apiKey: string) =>
  `https://www.googleapis.com/youtube/v3/${path}?key=${apiKey}`;

export async function getPlaylistRoutes(): Promise<string[]> {
  try {
    const playlist = await getPlaylist();
    return (
      playlist.items
        ?.map((item) => item.snippet?.resourceId?.videoId)
        .filter((videoId) => !!videoId)
        .map((videoId) => `/playlist/${videoId}`) ?? []
    );
  } catch (e) {
    console.log(e);
    return [];
  }
}
export async function getPlaylist(): Promise<PlaylistItemListResponse> {
  const constants = await getConstants();
  const response = await fetch(
    `${apiBase(
      'playlistItems',
      constants.GOOGLE_API_KEY,
    )}&part=snippet&maxResults=50&playlistId=${constants.YOUTUBE_PLAYLIST_ID}`,
  );
  return (await response.json()) as PlaylistItemListResponse;
}

export async function getVideo(videoId: string): Promise<VideoListResponse> {
  const constants = await getConstants();
  const response = await fetch(
    `${apiBase(
      'videos',
      constants.GOOGLE_API_KEY,
    )}&part=snippet%2Cstatistics&id=${videoId}&maxResults=50`,
  );
  return (await response.json()) as VideoListResponse;
}
