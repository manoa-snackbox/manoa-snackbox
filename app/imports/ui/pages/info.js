import { Template } from 'meteor/templating';
import { Products } from '../../api/products/products.js';

Template.Info.helpers({

  drinksList() {
    return Products.find({category:'drink'});
  },
  snacksList() {
    return Products.find({category:'snack'});
  },
});

Template.Info.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Products');
  });
});