define([
    'app'
], function () {
    'use strict';

    return BookWorm.module('HomePage', function (HomePage, App, Backbone, Marionette) {
        HomePage.Router = Marionette.AppRouter.extend({
            appRoutes: {
                'book/:id': 'showBookDetails'
            }
        });

        HomePage.Controller = Marionette.Controller.extend({
            start: function () {
                this.showBookShelf();
                this.showFooter();
            },

            showBookDetails: function () {
                console.log('book details page!');
            },

            showBookShelf: function () {
                App.root.showChildView('bookshelf', new App.Layout.Bookshelf());
            },

            showFooter: function () {
                App.root.showChildView('footer', new App.Layout.Footer());
            }
        });
    });
});