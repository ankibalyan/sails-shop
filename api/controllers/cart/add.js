'use strict';
/**
 * Module dependencies
 */

 const Cart = require('../../models/Cart.js');

/**
 * cart/add.js
 *
 * Add cart.
 */

module.exports = function add(req, res) {
  const sku = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findOne({ sku: sku }).then(function (product) {
    cart.add(product, product.sku);
    req.session.cart = cart;
    req.session.save();
    console.log({ session: req.session });
  }).catch(function (err) {
    console.log({err});
  });

  return res.redirect('/');
};
