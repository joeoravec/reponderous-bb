/*global ReponderousBb, Backbone*/

ReponderousBb.Models = ReponderousBb.Models || {};

(function () {
    'use strict';

    ReponderousBb.Models.RepoItem = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            id: null,
            title: 'title',
            openIssues: 0
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            console.log('parse', response);
            return response;
        }
    });

})();
