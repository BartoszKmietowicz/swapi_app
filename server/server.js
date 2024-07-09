const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/api/home/', (req, res) => {
  fetch('http://swapi.dev/api/people')
    .then((res) => res.json())
    .then((data) => {
      res.json(data);
    });
});
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
