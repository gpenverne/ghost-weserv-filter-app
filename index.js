'use strict';

var App = require('ghost-app');
var WeservApp;

WeservApp = App.extend({
    activate: function (ghost) {
        console.log('Activate WeservApp');
        this.ghost.helpers.register('weserv', this.weserv);
    },
    install: function () {
        console.log('Install WeservApp');
    },
    weserv: function(imageUrl, width, height) {
        if(!imageUrl) {
            return "";
        }
        try {
            var imageUrl = imageUrl.replace(/(^\w+:|^)\/\//, '');
            var baseWeservUrl = 'https://images.weserv.nl/?';
            if (width) {
              baseWeservUrl = baseWeservUrl+'&w='+width;
            }
            if (height) {
              baseWeservUrl = baseWeservUrl+'&h='+height;
            }
            return  baseWeservUrl+'&url='+imageUrl;
        } catch(e) {
            return imageUrl;
        }
    }
});
module.exports = WeservApp;
