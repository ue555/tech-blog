import {useState} from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogDetail from './components/BlogDetail';
import NotFound from './components/NotFound';
import {blogPosts} from './data/posts';
import {useRouting} from './hooks/useRouting';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {currentPage, selectedPost, navigateToPost, navigateToHome} = useRouting();

  let content;
  if (currentPage === 'home') {
    content = <HomePage posts={blogPosts} onPostClick={navigateToPost}/>;
  } else if (currentPage === 'detail' && selectedPost) {
    content = <BlogDetail post={selectedPost} onBackClick={navigateToHome}/>;
  } else {
    content = <NotFound onBackClick={navigateToHome}/>;
  }
  return (
    <div className="min-h-screen">
      <Header
        onHomeClick={navigateToHome}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {content}
    </div>
  );
}

export default App;
