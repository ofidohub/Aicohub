const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/api/posts', (req, res) => {
  const sql = 'SELECT * FROM posts';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

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

app.delete('/api/posts/:id', (req, res) => {
  const sql = 'DELETE FROM posts WHERE id = ?';
  db.run(sql, [req.params.id], function(err) {
    if (err) {
      throw err;
    }
    res.send({ message: 'Post deleted' });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));