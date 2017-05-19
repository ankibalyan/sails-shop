'use strict';
/**
 * Module dependencies
 */

// ...


/**
 * index.js
 *
 * Index products on home page.
 */
 module.exports = function index(req, res) {
   Product.find().exec(function (err, products) {
      // Handle unknown errors.
      if (err) {return res.serverError(err);}
      const successMsg = req.flash('success')[0];
      return res.view('homepage', { products: products, successMsg, noMessage: !successMsg });
   });
 };
