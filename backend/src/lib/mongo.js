const mongoose = require('mongoose')
const { Schema } = mongoose

async function connectDB () {
  try {
    if (mongoose.connection.readyState === 1) return console.log('Already connected to MongoDB')
    await mongoose.connect('mongodb://localhost:5500/chat')
      .then(() => console.log('Connected to MongoDB'))
      .catch((error) => console.log('Error connecting to MongoDB', error))
  } catch (error) {
    console.log('Error connecting to MongoDB', error)
  }
}

module.exports = {
  connectDB
}
