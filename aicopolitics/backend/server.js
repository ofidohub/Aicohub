// Importing required modules
const express = require('express');
const axios = require('axios');
const db = require('./db');

// Creating an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Setting the port for the server
const port = process.env.PORT || 5000;

// Route to fetch news from the News API
app.get('/news', async (req, res) => {
  try {
    // Making a GET request to the News API
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        apiKey: 'b7e1bbb45671499bb0a1c75787f071cd' // Replace with your actual News API key
      }
    });
    // Sending the response data back to the client
    res.send(response.data);
  } catch (error) {
    // Logging the error and sending a 500 response
    console.error(error);
    res.status(500).send('Error fetching news');
  }
});

// Route to get all posts from the database
app.get('/api/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

// Route to create a new post in the database
app.post('/api/posts', (req, res) => {
  const { title, content, category } = req.body;
  const sql = 'INSERT INTO posts (title, content, category) VALUES (?, ?, ?)';
  db.run(sql, [title, content, category], function(err) {
    if (err) {
      throw err;
    }
    res.send({ id: this.lastID, title, content, category });
  });
});

// Route to update a post in the database
app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, category } = req.body;
  const sql = 'UPDATE posts SET title = ?, content = ?, category = ? WHERE id = ?';
  db.run(sql, [title, content, category, id], function(err) {
    if (err) {
      throw err;
    }
    res.send({ id, title, content, category });
  });
});

// Route to delete a post from the database
app.delete('/api/posts/:id', (req, res) => {
  const sql = 'DELETE FROM posts WHERE id = ?';
  db.run(sql, [req.params.id], function(err) {
    if (err) {
      throw err;
    }
    res.send({ message: 'Post deleted' });
  });
});

// Starting the server
app.listen(port, () => console.log(`Server running on port ${port}`));