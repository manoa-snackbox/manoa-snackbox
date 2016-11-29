import { Template } from 'meteor/templating';
import { Products } from '../../api/products/products.js';

Template.Machine_Page.helpers({

  /**
   * @returns {*} All of the machine documents.
   */
  productsList() {
    return Products.find();
  },
});

Template.Machine_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Products');
  });
});


$('.visible.example .ui.sidebar')
    .sidebar({
      context: '.visible.example .bottom.segment'
    })
    .sidebar('hide')
;

$('.dropdown')
    .dropdown({
      action: 'ready'
    })
;

