const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express();

app.use(cors());

app.use(function (req, res, next) {
  const origins = [
    'http://127.0.0.1:3000',
    'https://vol4ok.herokuapp.com'
  ];
  for(let i = 0; i < origins.length; i++){
    if(req.headers.origin?.indexOf(origins[i]) > -1){
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/auth', require('./routes/auth.routes'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "./client/build")));
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  })
}

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI)
      .then(() => console.info(`MongoDB connected`))
      .catch(err => console.error('MongoDB error: ', err))
    app.listen(
      process.env.PORT || 5000,
      () => console.info(`App has been started on port ${process.env.PORT}`)
    )
  } catch (e) {
    console.error('Server error: ' + e.message)
    process.exit(1)
  }
}
start()

