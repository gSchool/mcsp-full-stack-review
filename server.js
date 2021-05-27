const express = require('express');
const morgan = require('morgan');
const { Pool } = require('pg')

const server = express();

const pool = new Pool({
  connectionString: 'postgres://localhost:5432/temp'
});

server.use(morgan('tiny'));
server.use(express.json());

server.get('/api/pets', (req, res) => {
  pool.query('SELECT * FROM pets', (err, data) => {
    res.json(data.rows);
  });
});

// Request Body -> req.body
// Headers -> req.get
// Request Path/params -> req.params
// Request Query -> req.query
//    GET http://localhost:3000/api/posts?search=programming&limit=100

server.post('/api/pets', (req, res) => {
  const { name, age } = req.body;

  pool.query('INSERT INTO pets (name, age) VALUES ($1, $2);', [name, age], (err, data) => {
    console.log('err', err);
    console.log(data.rows);
    res.json({ name, age });
  });
});

server.listen(3000, () => {
  console.log('Server listening at port 3000');
});
