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
      return res.view('homepage', { products: products });
   });
 };
