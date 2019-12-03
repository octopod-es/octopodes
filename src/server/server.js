const express = require('express');

const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static('dist'));

// app.get('/', (req, res) => res.sendFile('/Users/james/code/codesmith/bootcamp/jr/octo/podes/dist/index.html'))

app.use('*', (req, res) => res.send('Server is live - Ben'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
