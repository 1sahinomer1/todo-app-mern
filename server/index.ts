const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./router/userRouter');
import todoRoute from './router/todoRouter';

require('dotenv').config();

const app = express();

app.use(cors()); //to avoid errors
app.use(express.json());

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

app.use('/users', userRoute);
app.use('/todos', todoRoute);

app.listen(port, () => {
  console.log(`🚀 App listening on the port ${port}`);
});
