var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}],
})

module.exports = mongoose.model('User', userSchema)
