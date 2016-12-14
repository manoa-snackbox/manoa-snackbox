import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Products, ProductsSchema } from '../../api/products/products.js';

Template.Add_Info.onCreated(function onCreated() {
  this.context = ProductsSchema.namedContext('Add_Info');
});

Template.Add_Info.helpers({

});

/*Template.Add_Info.onRendered(function enableSemantic() {
 const instance = this;
 instance.$('select.ui.dropdown').dropdown();
 instance.$('.ui.selection.dropdown').dropdown();
 instance.$('select.dropdown').dropdown();
 instance.$('.ui.checkbox').checkbox();
 instance.$('.ui.radio.checkbox').checkbox();
 });*/

Template.Add_Info.events({
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


    const newProduct = { name, size, image, calories, fat, sodium, carbs, sugar, protein, caffeine, ingredients };
    instance.context.resetValidation();
    ProductsSchema.clean(newProduct);
    instance.context.validate(newProduct);
    if (instance.context.isValid()) {
      Products.insert(newProduct);
      FlowRouter.go('Info');
    }
  },
});