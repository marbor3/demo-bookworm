define([
    'app',
    'views/BookItemView'
], function () {
    'use strict';

    return BookWorm.module('Views', function (Views, App, Backbone) {

        Views.BooksCollection = Marionette.CollectionView.extend({
            childView: App.Views.BookItem,
            className: 'row'
        });
    });
});
