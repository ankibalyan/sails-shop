/**
 * Module dependencies
 */

 const Cart = require('../../models/Cart.js');

/**
 * checkout/index.js
 *
 * Index checkout.
 */
module.exports = function index(req, res) {

  if (!req.session.cart) {
    return res.redirect('/cart');
  }

  const cart = new Cart(req.session.cart);
  return res.view('shop/checkout', { total: cart.totalPrice });

};
