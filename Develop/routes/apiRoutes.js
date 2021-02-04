const notes = require('../db/db.json');
const fs = require('fs');
var uniqid = require('uniqid');



module.exports = (app) => {


app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/notes', (req, res) => {
    
    let newNote = {"title": req.body.title,
                    "text": req.body.text,
                    "id": uniqid(),
                };

    notes.push(newNote);
    
    fs.writeFile('db/db.json', JSON.stringify(notes), (err) =>
    err ? res.send("Error") :  res.json(newNote));
  });
    
};

