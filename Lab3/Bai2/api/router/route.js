const express = require('express');
const router = express.Router();
const { con } = require('../configs/database/database'); // Import connection

// POST /notes
router.post('/notes', (req, res) => {
  const { title, note } = req.body; // No need to extract 'id'

  const sql = 'INSERT INTO Note (title, note) VALUES (?, ?)';
  con.query(sql, [title, note], (err, result) => {
    if (err) {
      console.error('Failed to insert note:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Note created', noteId: result.insertId });
  });
});

// DELETE /notes/:id
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM Note WHERE id = ?';
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Failed to delete note:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  });
});

// GET /notes
router.get('/notes', (req, res) => {
  const sql = 'SELECT * FROM Note';
  con.query(sql, (err, rows) => {
    if (err) {
      console.error('Failed to fetch notes:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(rows);
  });
});

// PUT /notes/:id
router.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;

  if (!title || !note) {
    return res.status(400).json({ message: 'Title and note content are required' });
  }

  const sql = 'UPDATE Note SET title = ?, note = ? WHERE id = ?';
  con.query(sql, [title, note, id], (err, result) => {
    if (err) {
      console.error('Failed to update note:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note updated successfully' });
  });
});

router.get('/theme', (req, res) => {
  res.status(200).json(themeState);
});

module.exports = router;
