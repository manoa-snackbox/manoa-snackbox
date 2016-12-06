import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Products = new Mongo.Collection('Products');

export const ProductsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: true,
    max: 100,
  },
  category: {
    label: 'Category',
    type: String,
    optional: true,
    max: 10,
  },
  size: {
    label: 'Size',
    type: String,
    optional: true,
    max: 10,
  },
  price: {
    label: 'Price',
    type: String,
    optional: true,
    max: 10,
  },
  image: {
    label: 'Image URL',
    type: String,
    optional: true,
    max: 50,
  },
  calories: {
    label: 'Calories',
    type: String,
    optional: true,
    max: 4,
  },
  fat: {
    label: 'Fat',
    type: String,
    optional: true,
    max: 20,
  },
  sodium: {
    label: 'Sodium',
    type: String,
    optional: true,
    max: 20,
  },
  carbs: {
    label: 'Carbs',
    type: String,
    optional: true,
    max: 20,
  },
  sugar: {
    label: 'Sugar',
    type: String,
    optional: true,
    max: 10,
  },
  protein: {
    label: 'Protein',
    type: String,
    optional: true,
    max: 10,
  },
  caffeine: {
    label: 'Caffeine',
    type: String,
    optional: true,
    max: 10,
  },
  ingredients: {
    label: 'Ingredients',
    type: String,
    optional: true,
    max: 2000,
  },
});

Products.attachSchema(ProductsSchema);