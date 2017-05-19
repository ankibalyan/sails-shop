/**
 * Module dependencies
 */

const passport = require('passport');

/**
 * auth/google.js
 *
 * Google auth.
 */
module.exports = function google(req, res) {
  passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.me ',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ] })(req, res);
};
