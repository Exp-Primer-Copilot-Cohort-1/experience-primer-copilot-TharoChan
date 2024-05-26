// create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

// use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get all comments
app.get('/api/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
        } else {
            const comments = JSON.parse(data);
            res.json(comments);
        }
    });
});

// add new comment
app.post('/api/comments', (req, res) => {
    const newComment = req.body;
    fs.readFile('./comments.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Internal server error');
        } else {
            const comments = JSON.parse(data);
            comments.push(newComment);
            fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
                if (err) {
                    res.status(500).send('Internal server error');
                } else {
                    res.status(201).send('Comment added');
                }
            });
        }
    });
});

// start app
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});