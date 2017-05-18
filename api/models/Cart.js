'use strict';

/**
 * Cart.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = function Cart(cart) {
  this.items = cart.items || {};
  this.totalQty = cart.totalQty || 0;
  this.totalPrice = cart.totalPrice || 0;

  this.add = function (item, id) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }

    storedItem.qty += 1;
    storedItem.price += storedItem.item.price * storedItem.qty;

    this.totalQty += 1;
    this.totalPrice += storedItem.item.price;
  };

  this.generateCartArray = function () {
    var arr = [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }

    return arr;
  };
};
