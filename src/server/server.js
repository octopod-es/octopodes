const cmd = require('chronos-microservice-debugger3');

cmd.propagate();
const express = require('express');

const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const controller = require('./controller');

const PORT = 4000;

app.use(express.static('dist'));
app.use(bodyparser.json());

app.use('/', cmd.microCom('octopodes', 'sql', 'postgres://rqiocamx:XOIUvjH7oFYem_GAJ-1Z8a5aSLc9XhEN@rajje.db.elephantsql.com:5432/rqiocamx', 'yes', 's'));

// CHAOS FLOW
// app.use('/', (req) => console.log(req));

app.get('/data', controller.getData, (req, res) => {
  res.send(res.locals.data);
});

// If using ./dummyData.json, comment out /data GET route handler above
// app.get('/data', (res) => {
//   res.status(200).send('./dummyData');
// });

app.post('/', controller.addJob, (req, res) => {
  res.send(res.locals.jobInsertionInfo);
});

// app.get('/', (req, res) => res.sendFile('/Users/james/code/codesmith/bootcamp/jr/octo/podes/dist/index.html'))

app.use('*', (req, res) => res.send('Server is live - Ben'));

app.listen(PORT, () => console.log(`************************************************************************ Listening on port ${PORT} ************************************************************************`));
