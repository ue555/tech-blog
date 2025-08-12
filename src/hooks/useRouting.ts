import {useState, useEffect} from 'react';
import {blogPosts} from '../data/posts';
import type {BlogPost} from '../types/blog';

export type PageType = 'home' | 'detail' | 'notfound';

export interface RoutingState {
  currentPage: PageType;
  selectedPost: BlogPost | null;
}

export const useRouting = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const loadFromHash = () => {
    const hash = window.location.hash;

    if (hash.startsWith('#/post/')) {
      const postId = hash.replace('#/post/', '');
      const post = blogPosts.find(p => p.id === Number(postId));
      if (post) {
        setSelectedPost(post);
        setCurrentPage('detail');
      } else {
        setCurrentPage('notfound');
        setSelectedPost(null);
      }
    } else if (/^https?:\/\/[^/]+\/tech-blog\/(?:#\/?)?$/.test(window.location.href)) {
      setCurrentPage('home');
      setSelectedPost(null);
    } else {
      setCurrentPage('notfound');
      setSelectedPost(null);
    }
  };

  useEffect(() => {
    loadFromHash();

    window.addEventListener('hashchange', loadFromHash);
    return () => window.removeEventListener('hashchange', loadFromHash);
  }, []);

  const navigateToPost = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('detail');
    window.location.hash = `/post/${post.id}`;
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedPost(null);
    window.location.hash = '';
    history.replaceState(
      null,
      '',
      window.location.href.replace(/(\/tech-blog\/).*/, '$1')
    );
  };

  return {
    currentPage,
    selectedPost,
    navigateToPost,
    navigateToHome,
    loadFromHash,
  };
};
