export type Platform = 'twitter' | 'facebook' | 'instagram' | 'reddit' | 'threads';

export interface Post {
  id: string;
  content: string;
  image?: string;
  link?: string;
  platforms: Platform[];
  status: 'draft' | 'published';
  createdAt: Date;
  publishedAt?: Date;
}

export interface AIPrompt {
  topic: string;
  tone: 'professional' | 'casual' | 'humorous';
  length: 'short' | 'medium' | 'long';
}

export interface User {
  name: string;
  email: string;
  avatar: string | null;
}