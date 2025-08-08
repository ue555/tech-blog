import React from 'react';
import { Calendar, Clock, Tag, Bookmark, Heart, MessageCircle, ChevronRight } from 'lucide-react';
import type { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group animate-fade-in"
      onClick={() => onClick(post)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <button
            className="bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Bookmarked:', post.id);
            }}
          >
            <Bookmark className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center mb-3">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">·</span>
              <Clock className="w-3 h-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {post.likes}
            </span>
            <span className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {post.comments}
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
