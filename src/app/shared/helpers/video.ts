import { VideoItem } from '../../core/models';

export function getVideFilePath(video: VideoItem) {
  return `/content/videos/${video.meta?.videoFile}`;
}
