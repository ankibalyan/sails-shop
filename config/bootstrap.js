/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = function(cb) {
  // return callback in production environment
  if (process.env.NODE_ENV === 'production') {
    return cb();
  }

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  // list of prodcuts for seeding data in development
  var productSeedData = [{
    sku: 'A00001',
    title: 'sample Product 1',
    description: 'a brief description about the product..',
    quantity: 100,
    price: 100,
    active: true
  }, {
    sku: 'A00002',
    title: 'sample Product 2',
    description: 'a brief description about the second product..',
    quantity: 10,
    price: 500,
    active: true
  }, {
    sku: 'A00003',
    title: 'sample Product 3',
    description: 'a brief description about the third product..',
    quantity: 10,
    price: 500,
    active: true
  }, {
    sku: 'A00004',
    title: 'sample Product 4',
    description: 'a brief description about the fouth product..',
    quantity: 5,
    price: 1000,
    active: true
  }];

  Product.createEach(productSeedData).then(function (err) {
    if (err) {
      console.log(err);
    }
    return cb();
  });

};
