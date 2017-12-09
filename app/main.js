'use strict';

import $ from 'jquery';
import './../server/public/styles/main.less'; // global styles
import 'imports-loader?$=jquery!materialize-css/bin/materialize'; // depends on jquery
import _ from 'lodash';
// import routes from './routes.js';
import routesV2 from './routesV2.js';
import controllers from './controllers.js';
import bootstrap from './bootstrap';
import App from 'trinity/App';
import Router from 'trinity/router/Router';
import Gateway from 'trinity/Gateway';

// Extends jquery
$.id = document.getElementById.bind(document);
// Externals for debug
window.$ = $;
window._ = _;

// create Router
let router = new Router(routesV2);

// Create App
/**
 * TrinityApp(routes, controllers, settings)
 *  - creates new Application wrapper
 * @param router {Router} Router instance
 * @param controllers {Object} contains name:class Controllers
 *  - Not necessary in development environment
 * @param settings {Object} describes basic application settings {attributeName: 'data-ng-scope'}
 */
let myApp = new App(router, controllers);

myApp.addPreBOOTScript(bootstrap);


console.time('AppStart');
// Start App
/**
 * Kick it up!
 * @param successCallback {Function} optional success callback
 * @param errorCallback {Function} optional error callback
 */
myApp.start(
    function successCallback(){
        // Nothing to do
        console.timeEnd('AppStart');
    },
    function errorCallback(error){
        // ERROR?
        console.error(error);
        console.timeEnd('AppStart');
    }
);

// Export app for debug purposes
window.App = App;
window.Gateway = Gateway;
