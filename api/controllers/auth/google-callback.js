/**
 * Module dependencies
 */

const passport = require('passport');


/**
 * auth/google-callback.js
 *
 * Google callback.
 */
module.exports = function googleCallback(req, res) {
  console.log('google callback initalied');
  passport.authenticate('google', { failureRedirect: '/login' }, function (err, user) {
    console.log('on call back auth');
    console.log({err});
    console.log({user});
    req.logIn(user, function (err) {
      if (err) {
        console.log(err);
        return res.view('500');
      }
      console.log({user});
      return res.redirect('/');
    });
  })(req, res);

};
