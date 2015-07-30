define([
    'app',
    'models/BookModel'
], function () {
    'use strict';

    return BookWorm.module('Collection', function (Collection, App, Backbone) {

        Collection.Book = Backbone.Collection.extend({
            model: App.Model.Book
        });
    });
});