define([
    'app',
    'hbs!templates/footerLink'
], function (Application,
             FooterLinkTpl) {
    'use strict';

    return BookWorm.module('Views', function (Views, App, Backbone) {

        Views.LinkItem = Marionette.ItemView.extend({
            template: FooterLinkTpl
        });
    });
});
