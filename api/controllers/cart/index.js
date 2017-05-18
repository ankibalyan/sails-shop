/**
 * Module dependencies
 */

const Cart = require('../../models/Cart.js');

/**
 * cart/index.js
 *
 * Index cart.
 */

module.exports = function index(req, res) {
  if (!req.session.cart) {
    return res.view('shop/cart', { products: null });
  }

  const cart = new Cart(req.session.cart);
  return res.view('shop/cart', { products: cart.generateCartArray(), totalPrice: cart.totalPrice });
};
