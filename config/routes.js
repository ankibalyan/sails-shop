/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    action: 'index'
  },



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'get /login': { view: 'auth/login' },
  'get /logout': 'auth/logout',
  'get /auth/google': { action: 'auth/google' },
  'get /auth/google/callback': { action: 'auth/google-callback' },

  'get /cart/add/:id': { action: 'cart/add' },
  'get /cart': { action: 'cart/index' },

  'get /checkout': { action: 'checkout/index' },
  'post /checkout': { action: 'checkout/post' },
};
