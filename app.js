const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const WebSocketServer = require('ws').Server;
const { setupWebSocket } = require('./websocket');

var indexRouter = require('./routes/index');
var quizRouter = require('./routes/quiz');


app.use(cors());
app.use(express.json());
app.use('/', indexRouter);
app.use('/api/quizzes', quizRouter);



const wss = new WebSocketServer({ port: 8080 });
setupWebSocket(wss);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
