const express = require('express');

const app = express();
const path = require('path');
const bodyparser = require('body-parser')

const PORT = 3000;

app.use(express.static('dist'));
app.use(bodyparser.json());

app.post('/', (req, res) => {
    
    res.send(req.body.company)
});

// app.get('/', (req, res) => res.sendFile('/Users/james/code/codesmith/bootcamp/jr/octo/podes/dist/index.html'))

app.use('*', (req, res) => res.send('Server is live - Ben'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
