export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

export interface Comment {
  id: number;
  content: string;
  timestamp: string;
}
