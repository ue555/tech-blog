import React, {type ClassAttributes, type HTMLAttributes, useState} from 'react';
import { Calendar, Clock, Tag, Bookmark, Heart, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
// import rehypeHighlight from 'rehype-highlight';
// import 'highlight.js/styles/github.css';

import type { BlogPost } from '../types/blog';

interface BlogDetailProps {
  post: BlogPost;
  onBackClick: () => void;
}

class ExtraProp {
}
//TODO code: ({inline, className, children, ...props} :ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProp) type error
const mdComponents: Partial<Components> = {
  a: (props) => <a {...props} target="_blank" rel="noopener noreferrer"/>,
  code: ({inline, className, children, ...props} :ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProp) =>
    inline ? (
      <code className="px-1 py-0.5 rounded bg-gray-100" {...props}>
        {children}
      </code>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    ),
  h2: (props) => <h2 className="mt-10 mb-4 text-2xl font-bold" {...props} />,
  h3: (props) => <h3 className="mt-8 mb-3 text-xl font-semibold" {...props} />,
  img: (props) => <img className="rounded-lg shadow" alt={props.alt ?? ''} {...props} />,
};

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBackClick }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    // 競合しないように関数型アップデートで一貫させる
    setLiked((prev) => {
      const next = !prev;
      setLikeCount((c) => c + (next ? 1 : -1));
      return next;
    });
  };

  const markdown = (post.content?.trim() || post.excerpt || '').toString();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <span
            className="hover:text-blue-600 cursor-pointer transition-colors"
            onClick={onBackClick}
          >
            ホーム
          </span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>記事</span>
        </nav>

        <article className="animate-fade-in">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">·</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-colors ${
                    liked
                      ? 'bg-red-600 text-white'
                      : 'bg-red-50 text-red-600 hover:bg-red-100'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                  <span className="font-medium">{likeCount}</span>
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {post.imageUrl && (
            <div className="mb-8">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none mb-12 prose-headings:scroll-mt-24 prose-a:underline-offset-2 prose-pre:rounded-xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              // rehypePlugins={[rehypeHighlight]} // ←（任意）コードハイライト
              components={mdComponents}
            >
              {markdown}
            </ReactMarkdown>
          </div>

          <div className="border-t pt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">コメント ({post.comments})</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                コメントを書く
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex space-x-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=comment1"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-1">開発者A</p>
                    <p className="text-gray-700 text-sm">
                      とても参考になりました！実際のプロジェクトで試してみます。
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">2時間前</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
