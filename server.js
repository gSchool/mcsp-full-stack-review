const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('tiny'));
server.use(express.json());

server.get('/api/pets', (req, res) => {
  res.send('made request to /api/pets')
});

server.listen(3000, () => {
  console.log('Server listening at port 3000');
});
