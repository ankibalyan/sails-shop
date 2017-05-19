'use strict';
/**
 * Customer.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },
    password: {
      type: 'string'
    },
    provider: {
      type: 'string'
    },
    providerId: {
      type: 'string'
    },
    active: {
      type: 'boolean',
      defaultsTo: false
    },
  },

  // remove password from user's object going client side.
  customToJSON: function () {
    return _.omit(this, ['password']);
  }

};
