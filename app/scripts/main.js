/*global ReponderousBb, $*/


window.ReponderousBb = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var mycollection = new this.Collections.RepoItems();
        mycollection.fetch();
        console.log('here', mycollection);
        new this.Views.RepoList({
            collection: mycollection
        });
    }
};

$(document).ready(function () {
    'use strict';
    ReponderousBb.init();
});
