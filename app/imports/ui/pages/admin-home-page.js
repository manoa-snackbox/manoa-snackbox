/**
 * Created by Egan on 11/22/2016.
 */
import { Template } from 'meteor/templating';
import { Machines } from '../../api/machines/machines.js';

Template.Admin_Home_Page.helpers({

  /**
   * @returns {*} All of the Machines documents.
   */
  machinesList() {
    return Machines.find();
  },
});

Template.Admin_Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Machines');
  });
});
