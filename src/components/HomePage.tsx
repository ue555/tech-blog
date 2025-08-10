import React from 'react';
import type { BlogPost } from '../types/blog';
import BlogCard from './BlogCard';

interface HomePageProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

const HomePage: React.FC<HomePageProps> = ({ posts, onPostClick }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">最新の記事</h2>
          <p className="text-gray-600">気になった技術の最新トレンドとアウトプットした技術情報</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} onClick={onPostClick} />
          ))}
        </div>

        {/* TODO ブログの数が増えたら、少しづつ表示するようにする */}
        {/*<div className="mt-12 flex justify-center">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
            もっと見る
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
