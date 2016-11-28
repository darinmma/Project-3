var User = require('../models/user')

module.exports = {
  index: index,
  addMovie: addMovie
}

function addMovie(req, res) {
  User.findByIdAndUpdate(req.user._id, {$push: {
    movies: req.body.movie
  }},
  {safe: true, upsert: true},
function(err, user){
  if (err) throw err
  res.json(user)
})
}

function index(req, res) {
  User.find({}, function(err, users){
    if(err) return res.status(err.statusCode || 500).json(err)
    res.render(users)
  })
}
