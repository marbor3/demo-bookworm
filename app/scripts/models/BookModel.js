define([
    'app'
], function () {
    'use strict';

    return BookWorm.module('Model', function (Model, App, Backbone) {

        Model.Book = Backbone.Model.extend({
            defaults: {
                title: 'Brand New Book',
                cover: '/images/book_cover.jpg'
            }
        });
    });
});