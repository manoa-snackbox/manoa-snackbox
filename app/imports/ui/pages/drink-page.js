import { Template } from 'meteor/templating';
import { Products } from '../../api/products/products.js';

Template.drink_page.helpers({


  productsList() {
    return Products.find();
  },
});

Template.drink_page.onCreated(function onCreated() {
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
