define([
    'app'
], function () {
    'use strict';

    return BookWorm.module('Layout', function (Layout, App, Backbone) {

        Layout.Root = Marionette.LayoutView.extend({
            el: 'body',
            regions: {
                bookshelf: '.js-bookshelf',
                footer: '.js-footer'
            }
        });
    });
});