const express = require('express');
const mongoose = require('mongoose');
const config = require('config')

const app = express();
const PORT = config.get('port') || 5000

app.use(express.json())
app.use('/api/auth', require('./routes/auth.routes'))

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'))
    app.listen(PORT, () => console.info(`App has been started on port ${PORT}`));
  } catch (e) {
    console.error('Server error: ' + e.message)
    process.exit(1)
  }
}
start()

