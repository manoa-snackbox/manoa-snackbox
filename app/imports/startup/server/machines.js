import { Machines } from '../../api/machines/machines.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Machines to pre-fill the Collection.
 * @type {*[]}
 */
const machineSeeds = [
  {mid: 'ARTD1', type:'Drinks', location:'Art Building', vendor:'Coke', last:'10/10/2016'},
  {mid: 'BD1', type:'Drinks', location:'Bilger Additon Building', vendor:'Coke', last:'10/10/2016'},
  {mid: 'ROTCD1', type:'Drinks', location:'Army ROTC', vendor:'Coke', last:'10/10/2016'},
  {mid: 'ATHD1', type:'Drinks', location:'Athletic Complex', vendor:'Coke', last:'10/10/2016'},
  {mid: 'FD1', type:'Drinks', location:'Frear Hall', vendor:'Coke', last:'10/10/2016'},

];

/**
 * Initialize the Machines collection if empty with seed data.
 */
if (Machines.find().count() === 0) {
  _.each(machineSeeds, function seedMachines(stuff) {
    Machines.insert(stuff);
  });
}
