const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Task = require('./model/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors');
// const connectDB = require('./config/connectDB');

const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://task-manager-app.onrender.com'],
  })
);

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('<h1>hello</h1>');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on the ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
