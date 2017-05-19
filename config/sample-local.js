/**
 * Local environment settings
 *
 * Either set these values to your production file
 * or create /config/local.js file with your own values
 *
 * For more information, check out:
 * https://sailsjs.com/docs/concepts/configuration/the-local-js-file
 */

module.exports = {

  // Any configuration settings may be overridden below, whether it's built-in Sails
  // options or custom configuration specifically for your app (e.g. Stripe, Mailgun, etc.)
  datastores: {
    default: {
      adapter: 'sails-mongo',
      url: 'mongodb://user:password@host:port/database',
    },
  },
  models: {
    // drop only for development, in else it should be safe
    migrate: 'drop'
  },
  custom: {
    stripeSecret: 'xxxx-xxxxx-xxxxx-xxxx'
  }
};
