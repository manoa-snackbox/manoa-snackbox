import { Products } from '../../api/products/products.js';
import {_} from 'meteor/underscore';

/**
 * A list of Products to pre-fill the Collection.
 * @type {*[]}
 */
const productSeeds = [
  {
    name: 'Coca Cola',
    size: '20 oz. bottle',
    price: '$1.75'
  },
  {
    name: 'Coca Zero',
    size: '20 oz. bottle',
    price: '$1.75'
  },
  {
    name: 'Diet Coke',
    size: '20 oz. bottle',
    price: '$1.75'
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Products.find().count() === 0) {
  _.each(productSeeds, function seedProducts(stuff) {
    Products.insert(stuff);
  });
}