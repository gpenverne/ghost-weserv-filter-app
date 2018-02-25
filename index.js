
var App = require('ghost-app'),
    WeservHelperApp;

WeservHelperApp = App.extend({
  install: function () {},
  uninstall: function () {},
  activate: function () {
    this.ghost.helpers.register('weserv', this.weserv);
  },
  deactivate: function () {},
  weserv: function(url, width, height) {
    if(!url) {
      return "";
    }
    var url = url.replace(/(^\w+:|^)\/\//, '');
    var baseWeservUrl = 'https://images.weserv.nl/?';
    if (width) {
        baseWeservUrl = baseWeservUrl+'w='+width;
    }
    if (height) {
        baseWeservUrl = baseWeservUrl+'h='+height;
    }
    baseWeservUrl = baseWeservUrl+'url='+url;

    return baseWeservUrl;
  }
 });


module.exports = WeservHelperApp;
