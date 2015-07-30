require([
    'underscore',
    'backbone',
    'marionette',
    'app',
    'controllers/HomePageController',
    'layouts/RootLayout',
    'layouts/BookshelfLayout',
    'layouts/FooterLayout'
], function (_, Backbone, Marionette, BookWorm, HomePageController, RootLayout) {
    'use strict';

    BookWorm.root = new RootLayout.Root();
    var controller = new HomePageController.Controller();

    controller.router = new HomePageController.Router({
        controller: controller
    });

    controller.start();

    //TODO: make some wrapper for this
    $('.parallax').parallax();
});