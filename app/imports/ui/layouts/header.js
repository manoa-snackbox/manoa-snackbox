import { Template } from 'meteor/templating';

// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Header.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});

window.onload = choosePic;

function choosePic() {
  var myPix = new Array("/images/ArtBanner.jpg","/images/HolmesBanner.jpg","/images/KuykendallBanner.jpg", "/images/PostBanner.jpg");
  var randomNum = Math.floor(Math.random()*myPix.length);
  document.getElementById("banner").src = myPix[randomNum];
}