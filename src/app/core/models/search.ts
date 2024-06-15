export interface SearchHit {
  objectID: string;
  title: string;
  start: string;
  end: string;
  tags: string[];
  session: {
    videoId: string;
    title: string;
    subtitle: string;
    tags: string[];
    category: string;
  };
}
