import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */

export const StuffSchema = new SimpleSchema({
  Product: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
  },
  Size: {
    label: 'Quantity',
    type: Number,
    optional: false,
    max: 200,
  },
});

Stuff.attachSchema(StuffSchema);