const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/hello', (req, res, next) => {
  res.json('Hello word');
});
app.post('/recaptcha', (req, res, next) => {
  axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.token}`
    )
    .then((result) => res.json(result.data))
    .catch((error) => res.json(error));
});
app.listen(process.env.NODE_LOCAL_PORT, () => {
  console.log(`express running ${process.env.NODE_LOCAL_PORT}`);
});
