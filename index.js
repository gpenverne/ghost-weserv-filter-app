
var App = require('ghost-app'),
    WeservHelperApp;

weservHelperApp = App.extend({
  install: function () {},
  uninstall: function () {},
  activate: function () {
    this.ghost.helpers.register('weserv', this.weservHelper);
  },
  deactivate: function () {},
  weservHelper: function(url, width, height) {
    if(!url) {
      return "";
    }
    var url = url.replace(/(^\w+:|^)\/\//, '');
    var baseWeservUrl = 'https://images.weserv.nl/?';
    if (width) {
        baseWeservUrl = baseWeservUrl+'&w='+width;
    }
    if (height) {
        baseWeservUrl = baseWeservUrl+'&h='+height;
    }
    baseWeservUrl = baseWeservUrl+'&url='+url;

    return baseWeservUrl;
  }
 });


module.exports = weservHelperApp;
