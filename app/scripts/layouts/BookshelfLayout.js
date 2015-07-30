define([
    'app',
    'hbs!templates/bookshelf',
    'views/BooksCollectionView',
    'collections/BookCollection'
], function (Application,
             BookshelfTpl) {
    'use strict';

    return BookWorm.module('Layout', function (Layout, App, Backbone) {

        Layout.Bookshelf = Marionette.LayoutView.extend({
            template: BookshelfTpl,

            regions: {
                books: '.js-bookshelf-books'
            },

            ui: {
                'addBookButton': '.js-add-book'
            },

            events: {
                'click @ui.addBookButton': 'addNewBook'
            },

            onBeforeShow: function () {
                var books = new App.Collection.Book();

                books.fetch({
                    url: '/data/books.json'
                });

                this.showChildView('books', new App.Views.BooksCollection({
                    collection: books
                }));
            },

            addNewBook: function () {
                console.log('add new book');

                var newBook = new App.Model.Book();
                this.books.currentView.collection.add(newBook);
            }
        });
    });
});