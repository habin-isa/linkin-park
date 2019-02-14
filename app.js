import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// sets up the express app
const app = express();

// requests all todos in db
app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
const PORT = 5000;

// creates server and returns response with message
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

// parses incoming json data (i.e. request.property)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));