/**
 * Created by Joseph on 11/28/2016.
 */

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Products, ProductsSchema } from '../../api/products/products.js';

Template.Edit_Info_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Products');
  });
  this.context = ProductsSchema.namedContext('Edit_Info_Page');
});


Template.Edit_Info_Page.helpers({
  productField(fieldName) {
    const product = Products.findOne(FlowRouter.getParam('_id'));
    return product && product[fieldName];
  }
});

/*Template.Edit_Contact_Page.onRendered(function enableSemantic() {
 const template = this;
 template.subscribe('StudentData', () => {
 // Use this template.subscribe callback to guarantee that the following code executes after subscriptions OK.
 Tracker.afterFlush(() => {
 // Use Tracker.afterFlush to guarantee that the DOM is re-rendered before calling JQuery.
 template.$('select.ui.dropdown').dropdown();
 template.$('.ui.selection.dropdown').dropdown();
 template.$('select.dropdown').dropdown();
 template.$('.ui.checkbox').checkbox();
 template.$('.ui.radio.checkbox').checkbox();
 });
 });
 });*/

Template.Edit_Info_Page.events({
  'submit .product-info-form'(event, instance) {
    event.preventDefault();

    const name = event.target.Name.value;
    const size = event.target.Size.value;
    const image = event.target.Image.value;
    const calories = event.target.Calories.value;
    const fat = event.target.Fat.value;
    const sodium = event.target.Sodium.value;
    const carbs = event.target.Carbs.value;
    const sugar = event.target.Sugar.value;
    const protein = event.target.Protein.value;
    const caffeine = event.target.Caffeine.value;
    const ingredients = event.target.Ingredients.value;

    const updatedProduct = { name, size, image, calories, fat, sodium, carbs, sugar, protein, caffeine, ingredients };
    instance.context.resetValidation();
    ProductsSchema.clean(updatedProduct);
    instance.context.validate(updatedProduct);
    if (instance.context.isValid()) {
      Products.update(FlowRouter.getParam('_id'), { $set: updatedProduct });
      FlowRouter.go('Info');
    }
  },
  'click .delete'(event, instance) {
    event.preventDefault();
    Products.remove(FlowRouter.getParam('_id'));
    FlowRouter.go('Info');
  },
});