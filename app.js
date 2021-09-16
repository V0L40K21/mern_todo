const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()

const app = express();

app.use(express.json())
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

