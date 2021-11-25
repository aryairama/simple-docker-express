const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.get('/hello', (req, res, next) => {
  res.json('Hello word');
});
app.listen(process.env.NODE_LOCAL_PORT, () => {
  console.log(`express running ${process.env.NODE_LOCAL_PORT}`);
});
