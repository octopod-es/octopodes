const express = require('express');

const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const controller = require('./controller');

const PORT = 3000;

app.use(express.static('dist'));
app.use(bodyparser.json());

app.get('/data', controller.getData, (req, res) => {
//   console.log('i am here');
  res.send(res.locals.data);
})

app.post('/', controller.addJob, (req, res) => {
  res.send(res.locals.jobInsertionInfo);
});

// app.get('/', (req, res) => res.sendFile('/Users/james/code/codesmith/bootcamp/jr/octo/podes/dist/index.html'))

app.use('*', (req, res) => res.send('Server is live - Ben'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
