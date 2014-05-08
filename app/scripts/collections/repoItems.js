/*global ReponderousBb, Backbone*/

ReponderousBb.Collections = ReponderousBb.Collections || {};

(function () {
    'use strict';

    ReponderousBb.Collections.RepoItems = Backbone.Collection.extend({
        model: ReponderousBb.Models.RepoItem,
        url: 'https://api.github.com/search/repositories?q=+user:joeoravec&sort=stars&order=desc',
        initialize: function (models, options) {
            //this.model = ReponderousBb.Models.RepoItem;
        },
        parse: function (response) {
            console.log('coll parse', response);
          return response.items;
       }

    });

})();
