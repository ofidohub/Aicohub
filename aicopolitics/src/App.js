import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MenuBar from './components/MenuBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ['Politics', 'Business', 'Travel', 'Banking', 'CryptoTech', 'Technology', 'Sports', 'SpaceTech'];
  const [posts, setPosts] = useState([]); // Assume you have some posts

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const Post = ({ post }) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    );
  };

  useEffect(() => {
    // Fetch posts from an API
    fetch('https://api.example.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  const filteredPosts = posts.filter(post => post.title.includes(searchTerm));

  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <MenuBar categories={categories} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/posts" element={<Main>{filteredPosts.map(post => (<Post key={post.id} post={post} />))}</Main>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;





