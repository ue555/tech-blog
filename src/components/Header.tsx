import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onHomeClick: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, mobileMenuOpen }) => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1
              className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
              onClick={onHomeClick}
            >
              TechBlog
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">トレンド</a>
              <a className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">カテゴリー</a>
              <a className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">タグ</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="記事を検索"
                className="bg-transparent outline-none text-sm w-48"
              />
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 animate-slide-up">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="記事を検索"
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
          <nav className="space-y-2">
            <a className="block py-2 text-gray-700">トレンド</a>
            <a className="block py-2 text-gray-700">カテゴリー</a>
            <a className="block py-2 text-gray-700">タグ</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
