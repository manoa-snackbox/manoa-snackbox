import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Products, ProductsSchema } from '../../api/products/products.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Add_Product_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ProductsSchema.namedContext('Add_Product_Page');
});

Template.Add_Product_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

/*Template.Add_Product_Page.onRendered(function enableSemantic() {
 const instance = this;
 instance.$('select.ui.dropdown').dropdown();
 instance.$('.ui.selection.dropdown').dropdown();
 instance.$('select.dropdown').dropdown();
 instance.$('.ui.checkbox').checkbox();
 instance.$('.ui.radio.checkbox').checkbox();
 });
 */

Template.Add_Product_Page.events({
  'submit .product-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const name = event.target.name.value;
    const size = event.target.size.value;
    const price = event.target.price.value;
    const newProduct = {name, size, price};
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newStudentData reflects what will be inserted.
    ProductsSchema.clean(newProduct);
    // Determine validity.
    instance.context.validate(newMachine);
    if (instance.context.isValid()) {
      Products.insert(newProduct);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Machine_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

