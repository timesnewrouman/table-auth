const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { PORT, DATABASE_URL } = require('./config');

const allowedList = [
  'http://localhost:8080',
  'https://timesnewrouman.github.io',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors(corsOptions));
app.use('/', require('./router'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})