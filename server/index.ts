const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

const MongoURL = process.env.CONNECTDB_URL;

mongoose.connect(MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established');
});

app.listen(port, () => {
  console.log(`🚀 App listening on the port ${port}`);
});
