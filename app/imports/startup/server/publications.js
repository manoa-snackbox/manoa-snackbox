import { Products } from '../../api/products/products.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Products', function publishProductsData() {
  return Products.find();
});
