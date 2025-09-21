const express = require('express');
const cors = require('cors'); // <-- 1. IMPORTE O PACOTE CORS

const app = express();
const port = 3001;

app.use(cors()); // <-- 2. USE O CORS COMO MIDDLEWARE

app.get('/api', (req, res) => {
  res.send('Hello World from the back-end! Testando de novo');
});

app.listen(port, () => {
  console.log(`Servidor back-end rodando em http://localhost:${port}`);
});