import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [endOfNews, setEndOfNews] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            country: 'us',
            category: 'business',
            sources: 'source1,source2',
            q: searchTerm,
            pageSize: 100,
            page: page,
          },
          headers: {
            'Authorization': 'b7e1bbb45671499bb0a1c75787f071cd'
          }
        });

        if (response.data.articles.length > 0) {
          setNews(prevNews => [...prevNews, ...response.data.articles]);
        } else {
          setEndOfNews(true);
        }
      } catch (error) {
        setError('Failed to fetch news due to network error');
        console.error('Failed to fetch news due to network error', error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [page, searchTerm]);

  const sortedArticles = [...news].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title > b.title ? 1 : -1;
    } else {
      return a.title < b.title ? 1 : -1;
    }
  });

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
        <div> Error: {error}</div>
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

export default News;