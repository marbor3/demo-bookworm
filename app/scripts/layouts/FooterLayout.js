define([
    'app',
    'hbs!templates/footer',
    'views/LinksCompositeView'
], function (Application,
             FooterTpl) {
    'use strict';

    return BookWorm.module('Layout', function (Layout, App, Backbone) {

        Layout.Footer = Marionette.LayoutView.extend({
            template: FooterTpl,
            regions: {
                aboutUsLinks: '.js-footer-about-us-links',
                worthReadingLinks: '.js-footer-worth-reading-links'
            },
            onBeforeShow: function () {
                this.showChildView('aboutUsLinks', new App.Views.LinksComposite({
                    model: new Backbone.Model({
                        sectionTitle: 'Must read'
                    }),
                    collection: new Backbone.Collection([{
                        id: 1,
                        href: 'http://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
                        name: 'Clean Code'
                    }, {
                        id: 2,
                        href: 'http://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530',
                        name: 'Test Driven Development'
                    }])
                }));

                this.showChildView('worthReadingLinks', new App.Views.LinksComposite({
                    model: new Backbone.Model({
                        sectionTitle: 'Worth reading'
                    }),
                    collection: new Backbone.Collection([{
                        id: 1,
                        href: 'http://www.amazon.com/Patterns-Enterprise-Application-Architecture-Martin/dp/0321127420',
                        name: 'Patterns of Enterprise Application Architecture'
                    }, {
                        id: 2,
                        href: 'http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
                        name: 'Design Patterns: Elements of Reusable Object-Oriented Software'
                    }])
                }));
            }
        });
    });
});