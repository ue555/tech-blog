export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  likes: number;
  comments: number;
}

export interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}
