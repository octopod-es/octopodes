const express = require('express');

const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const controller = require('./controller');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;
const PORT2 = 8000;


app.use('/dist/', express.static('dist'));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../../index.html'))
} )

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


app.get('/data', controller.getData, (req, res) => {
//   console.log('i am here');
  res.send(res.locals.data);
})

app.post('/', controller.addJob, (req, res) => {
  res.send(res.locals.jobInsertionInfo);
});

// app.get('/', (req, res) => res.sendFile('/Users/james/code/codesmith/bootcamp/jr/octo/podes/dist/index.html'))

app.use('*', (req, res) => res.send('Server is live - Ben'));

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
http.listen(PORT, () => console.log("HTTP IS LISTENING ON 3000"));
