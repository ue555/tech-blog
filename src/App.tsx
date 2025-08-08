import { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogDetail from './components/BlogDetail';
import { blogPosts } from './data/posts';
import type {BlogPost} from './types/blog';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'detail'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen">
      <Header
        onHomeClick={handleHomeClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {currentPage === 'home' ? (
        <HomePage posts={blogPosts} onPostClick={handlePostClick} />
      ) : (
        selectedPost && (
          <BlogDetail post={selectedPost} onBackClick={handleHomeClick} />
        )
      )}
    </div>
  );
}

export default App;
