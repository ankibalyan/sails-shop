/**
 * Product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    sku: {
      type: 'string',
      unique: true,
      required: true,
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },
    stock: {
      type: 'number',
      defaultsTo: 0
    },
    price: {
      type: 'number',
      required: true,
    },
    active: {
      type: 'boolean',
      defaultsTo: false
    }
  },

};
