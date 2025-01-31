const express = require('express');
const router = express.Router();
const Note = require('../models/noteModel');
const databaseMaster = require('../databaseMaster');
const { v4: uuidv4 } = require('uuid');

/* Get all notes associated with a username */
router.get('/getNotes/:username', async (req, res) => {
    try {
        const username = req.params.username;
        await databaseMaster.dbOp('find', 'NoteDetails', { query: { username: username } }).then(data => {
            res.json(data);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Get all notes associated with a restaurantId from a given username */
router.get('/getNotesRestaurant/:username/:restaurantId', async (req, res) => {
    try {
        const username = req.params.username;
        const restaurantId = req.params.restaurantId;
        const query = { username: username, restaurantId: restaurantId }
        await databaseMaster.dbOp('find', 'NoteDetails', { query: query }).then(data => {
            res.json(data);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Get all notes associated with a restaurantId from a given username */
router.get('/getNote/:noteId', async (req, res) => {
    try {
        const query = { noteId: req.params.noteId }
        await databaseMaster.dbOp('find', 'NoteDetails', { query: query }).then(data => {
            res.json(data);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Create a note */
router.post('/createNote', async (req, res) => {
    try {
        const noteId = uuidv4();

        const note = new Note({
            noteId: noteId,
            date: req.body.date,
            content: req.body.content,
            restaurantId: req.body.restaurantId,
            username: req.body.username,
            rating: req.body.rating
        });

        await databaseMaster.dbOp('insert', 'NoteDetails', { docs: [note] });
        res.status(201).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Update the content of a given note (noteId) */
router.put('/editNote/:noteId', async (req, res) => {
    try {
        const { date, content,rating } = req.body;
        const query = { noteId : req.params.noteId }
        const docs = { $set: { date: date, content: content, rating: rating } };
        const response = await databaseMaster.dbOp('update', 'NoteDetails', { query, docs });
        res.status(201).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/* Delete a note */
router.delete('/deleteNote/:noteId', async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const result = await databaseMaster.dbOp('delete', 'NoteDetails', { query: { noteId: noteId } } );
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Note deleted successfully' });
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;