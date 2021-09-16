const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(express.json())
app.use('/api/auth', require('./routes/auth.routes'))

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

