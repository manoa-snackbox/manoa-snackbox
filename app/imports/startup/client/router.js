import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});


FlowRouter.route('/admin-home-page', {
  name: 'Admin_Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Admin_Home_Page' });
  },
});

FlowRouter.route('/map', {
  name: 'Map',
  action() {
    BlazeLayout.render('App_Body', { main: 'Map' });
  },
});

FlowRouter.route('/info', {
  name: 'Info',
  action() {
    BlazeLayout.render('App_Body', { main: 'Info' });
  },
});

FlowRouter.route('/polls', {
  name: 'Poll',
  action() {
    BlazeLayout.render('App_Body', { main: 'Poll' });
  },
});

FlowRouter.route('/edit-machine/:id', {
  name: 'Edit_Machine',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Machine' });
  },
});

FlowRouter.route('/machine-page', {
  name: 'Machine_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Machine_Page' });
  },
});

FlowRouter.route('/add-product', {
  name: 'Add_Product_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Product_Page' });
  },
});

FlowRouter.route('/edit-product', {
  name: 'Edit_Product_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Product_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
