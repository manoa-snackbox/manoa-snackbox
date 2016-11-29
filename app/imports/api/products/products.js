import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Products = new Mongo.Collection('Products');

/**
 * Create the schema for Products
 */

export const ProductsSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 200,
  },
  size: {
    label: 'size',
    type: String,
    optional: false,
    max: 200,
  },
  price: {
    label: 'price',
    type: String,
    optional: false,
    max: 200,
  },

});

Products.attachSchema(ProductsSchema);