/**
 * Autoreload your sails app whenever any change dir files.
 */

module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
  ]
};
