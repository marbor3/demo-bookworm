define([
    'underscore',
    'backbone',
    'marionette'
], function (_,
             Backbone,
             Marionette) {
    'use strict';

    var BookWormApp = Marionette.Application.extend({});

    window.BookWorm = new BookWormApp();

    BookWorm.on('start', function () {
        if (Backbone.history) {
            Backbone.history.start();
        }
    });
    BookWorm.start();

    return BookWorm;
});