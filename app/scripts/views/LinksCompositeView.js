define([
    'app',
    'hbs!templates/footerLinks',
    'views/LinkItemView'
], function (Application,
             FooterLinksTpl) {
    'use strict';

    return BookWorm.module('Views', function (Views, App, Backbone) {

        Views.LinksComposite = Marionette.CompositeView.extend({
            template: FooterLinksTpl,
            childView: App.Views.LinkItem,
            childViewContainer: '.js-footer-about-us-link'
        });
    });
});
