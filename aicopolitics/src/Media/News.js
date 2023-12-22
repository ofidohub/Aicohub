// Import necessary modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css'; // Import the CSS file

// Define the News component
const News = () => {
  // Define state variables
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endOfNews, setEndOfNews] = useState(false);
  const [page, setPage] = useState(1); // Current page for fetching news
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering news
  const [sortOrder, setSortOrder] = useState('asc'); // Sort order for sorting news

  // Define effect for fetching news
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading to true
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}`);
        if (response.data.articles.length > 0) {
          setNews(prevNews => [...prevNews, ...response.data.articles]);
        } else {
          setEndOfNews(true);
        }
      } catch (error) {
        setError('Failed to fetch news due to network error');
        console.error('Failed to fetch news due to network error', error);
      }
      setLoading(false); // Set loading to false
    };

    fetchNews();
  }, [page]);

  // Define effect for infinite scrolling
  useEffect(() => {
    const scrollHandler = (e) => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || endOfNews) return;
      setPage(prevPage => prevPage + 1);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [loading, endOfNews]);

  // Filter articles based on search term
  const filteredArticles = news.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort articles based on sort order
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (sortOrder === 'asc') {
      return titleA > titleB ? 1 : -1;
    } else {
      return titleA < titleB ? 1 : -1;
    }
  });

  // Render component
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select onChange={e => setSortOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      {loading ? (
        'Loading...'
      ) : error ? (
        <div>{error}</div>
      ) : (
        sortedArticles.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      )}
      {endOfNews && 'You have reached the end of the news list.'}
    </div>
  );
};

export default News; // Export News component