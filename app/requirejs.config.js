requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        backbone: '../../bower_components/backbone/backbone',
        'backbone.babysitter': '../../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': '../../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.localstorage': '../../bower_components/backbone.localstorage/backbone.localStorage',
        marionette: '../../bower_components/marionette/lib/core/backbone.marionette',
        handlebars: '../../bower_components/handlebars/handlebars',
        hbs: '../../bower_components/require-handlebars-plugin/hbs_',
        'hbs/handlebars': '../../bower_components/require-handlebars-plugin/hbs/handlebars',
        'hbs/underscore': '../../bower_components/require-handlebars-plugin/hbs/underscore',
        'hbs/i18nprecompile': '../../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        'hbs/json2': '../../bower_components/require-handlebars-plugin/hbs/json2',
        'jquery.easing': '../../bower_components/materialize/js/jquery.easing.1.3',
        'animation': '../../bower_components/materialize/js/animation',
        'velocity': '../../bower_components/materialize/js/velocity.min',
        'global': '../../bower_components/materialize/js/global',
        'collapsible': '../../bower_components/materialize/js/collapsible',
        'dropdown': '../../bower_components/materialize/js/dropdown',
        'leanModal': '../../bower_components/materialize/js/leanModal',
        'materialbox': '../../bower_components/materialize/js/materialbox',
        'parallax': '../../bower_components/materialize/js/parallax',
        'tabs': '../../bower_components/materialize/js/tabs',
        'tooltip': '../../bower_components/materialize/js/tooltip',
        'waves': '../../bower_components/materialize/js/waves',
        'sideNav': '../../bower_components/materialize/js/sideNav',
        'scrollspy': '../../bower_components/materialize/js/scrollspy',
        'forms': '../../bower_components/materialize/js/forms',
        'slider': '../../bower_components/materialize/js/slider',
        'cards': '../../bower_components/materialize/js/cards',
        'pushpin': '../../bower_components/materialize/js/pushpin',
        'buttons': '../../bower_components/materialize/js/buttons',
        'scrollFire': '../../bower_components/materialize/js/scrollFire',
        'picker': '../../bower_components/materialize/js/date_picker/picker',
        'picker.date': '../../bower_components/materialize/js/date_picker/picker.date',
        'jquery.timeago': '../../bower_components/materialize/js/jquery.timeago.min',
        'character_counter': '../../bower_components/materialize/js/character_counter'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'underscore': {
            deps: [],
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.babysitter': {
            deps: ['backbone']
        },
        'backbone.localstorage': {
            deps: ['backbone']
        },
        'backbone.wreqr': {
            deps: ['backbone']
        },
        'marionette': {
            deps: ['backbone.wreqr']
        },
        'jquery.easing': {
            deps: ['jquery']
        },
        'collapsible': {
            deps: ['jquery']
        },
        'dropdown': {
            deps: ['jquery']
        },
        'leanModal': {
            deps: ['jquery']
        }
    },
    hbs: { // optional
        helpers: true,            // default: true
        i18n: false,              // default: false
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: ''           // default: ''
    }
});
