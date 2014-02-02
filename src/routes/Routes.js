"use strict"

var Backbone = require('backbone/backbone.js');

module.exports = Backbone.Router.extend ({
    routes: {
        'view': 'viewImage'
    },
    viewImage: function () {
        console.log('you are viewing an image');
    }
});
