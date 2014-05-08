/*global ReponderousBb, Backbone, JST*/

ReponderousBb.Views = ReponderousBb.Views || {};

(function () {
    'use strict';

    ReponderousBb.Views.RepoList = Backbone.View.extend({

        el: '#repo-app',

        template: JST['app/scripts/templates/repoList.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.collection.bind('replace reset add remove', this.render, this);
            this.render();
            console.log('init', this.collection);
        },

        render: function () {
            console.log('render');
            var myitems = this.collection.toJSON();
            var data = {name: 'this name', items: myitems};
            this.$el.html(this.template(data));
            console.log('items', data);
            return this;
        }

    });

})();
