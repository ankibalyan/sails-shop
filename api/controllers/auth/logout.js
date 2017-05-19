/**
 * auth/logout.js
 *
 * Logout auth.
 */
module.exports = function logout(req, res) {

  req.session.destroy();
  req.logOut();
  return res.redirect('/');
};
