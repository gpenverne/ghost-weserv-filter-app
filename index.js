
var App = require('ghost-app'),
    FilterApp;


WeservFilterApp = App.extend({
    filters: {
        weserv: 'weservProxy'
    },

    weservProxy: function (url, width, height) {
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


module.exports = WeservFilterApp;
