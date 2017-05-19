/**
 * Module dependencies
 */

const Cart = require('../../models/Cart.js');


/**
 * checkout/post.js
 *
 * Post checkout.
 */

module.exports = function post(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/cart');
  }

  var cart = new Cart(req.session.cart);

  var stripe = require("stripe")(
    sails.config.custom.stripeSecret
  );

  stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: "INR",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Test Charge"
  }, function(err, charge) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout')
    }

    req.flash('success', 'purchase successfully');
    req.session.cart = null;
    res.redirect('/');
  });
};
