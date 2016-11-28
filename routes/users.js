var router = require('express').Router()
var passport = require('passport')
var usersCtrl = require('../controllers/users')

router.get('/', function(req, res) {
  console.log('hi there')
  res.render('index', {user: req.user});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/movies',
    failureRedirect : '/'
  }
));

router.patch('/user/movies', usersCtrl.addMovie)

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router
