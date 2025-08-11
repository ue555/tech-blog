import {useState, useEffect} from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';
import {blogPosts} from './data/posts';
import type {BlogPost} from './types/blog';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'detail' | 'notfound'>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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

    loadFromHash();

    window.addEventListener('hashchange', loadFromHash);
    return () => window.removeEventListener('hashchange', loadFromHash);
  }, []);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('detail');
    window.location.hash = `/post/${post.id}`;
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
    setSelectedPost(null);
    window.location.hash = '';
    history.replaceState(
      null,
      '',
      window.location.href.replace(/(\/tech-blog\/).*/, '$1')
    );
  };

  let content;
  if (currentPage === 'home') {
    content = <HomePage posts={blogPosts} onPostClick={handlePostClick}/>;
  } else if (currentPage === 'detail' && selectedPost) {
    content = <BlogDetail post={selectedPost} onBackClick={handleHomeClick}/>;
  } else {
    content = <NotFound onBackClick={handleHomeClick}/>;
  }
  return (
    <div className="min-h-screen">
      <Header
        onHomeClick={handleHomeClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {content}
    </div>
  );
}

export default App;
