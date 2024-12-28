import { create } from 'zustand';
import { Post, Platform, User } from '../types';

interface Store {
  posts: Post[];
  user: User;
  addPost: (post: Post) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  updateUser: (updates: Partial<User>) => void;
}

export const useStore = create<Store>((set) => ({
  posts: [],
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: null,
  },
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  updatePost: (id, updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === id ? { ...post, ...updatedPost } : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
  updateUser: (updates) =>
    set((state) => ({
      user: { ...state.user, ...updates },
    })),
}));