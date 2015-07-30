define([
    'app',
    'hbs!templates/bookshelfItem'
], function (Application,
             BookshelfItemTpl) {
    'use strict';

    return BookWorm.module('Views', function (Views, App, Backbone) {

        Views.BookItem = Marionette.ItemView.extend({
            template: BookshelfItemTpl,
            className: 'col s12 m4 l3',

            ui: {
                'removeButton': '.js-remove-book'
            },

            events: {
                'click @ui.removeButton': 'removeBook'
            },

            removeBook: function () {
                this.remove();
            }
        });
    });
});
