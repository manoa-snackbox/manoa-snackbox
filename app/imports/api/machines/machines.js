import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Machines = new Mongo.Collection('Machines');

/**
 * Create the schema for Machines
 */
export const MachinesSchema = new SimpleSchema({
  mid: {
    label: 'mid',
    type: String,
    optional: false,
    max: 200,
  },
  type: {
    label: 'type',
    type: String,
    optional: false,
    max: 200,
  },
  location: {
    label: 'location',
    type: String,
    optional: false,
    max: 200,
  },
  vendor: {
    label: 'vendor',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
});

Machines.attachSchema(MachinesSchema);
