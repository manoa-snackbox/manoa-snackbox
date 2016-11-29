/**
 * Created by Joseph on 11/27/2016.
 */

import { Template } from 'meteor/templating';
import { Products } from '../../api/products/products.js';

Template.Info.helpers({

  productsList() {
    return Products.find();
  },
});

Template.Info.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Products');
  });
});