import { Template } from 'meteor/templating';
import { Products } from '../../api/products/products.js';
import { _ } from 'meteor/underscore';

Template.Product.helpers({

  productField(fieldName) {
    const product = Products.findOne(FlowRouter.getParam('_id'));
    return product && product[fieldName];
  }
});

Template.Product.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Products');
  });
});