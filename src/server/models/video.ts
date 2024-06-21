import { VideoListResponse } from '../../app/core/models';

export interface VideoMetadata {
  description: string;
  chapters: RawChapter[];
  videoFile: string;
  chaptersFile: string;
  [key: string]: any;
}

export interface RawChapter {
  title: string;
  start: string;
  end: string;
  tags: string[];
}

export interface DatabaseItem {
  videoId: string;
  video: VideoListResponse;
  metadata: VideoMetadata;
}
