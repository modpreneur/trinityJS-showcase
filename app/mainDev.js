'use strict';

import './styles/main.less';
import $ from 'jquery';
import _ from 'lodash';
import routes from './routes.js';
import controllers from './controllers.js';
import App from 'trinity/App';

// Extends jquery
$.id = document.getElementById.bind(document);
// Externals for debug
window.$ = $;
window._ = _;

// Create App
/**
 * TrinityApp(routes, controllers, settings)
 *  - creates new Application wrapper
 * @param routes {Array} describing routes
 * @param controllers {Object} contains name:class Controllers
 *  - Not necessary in development environment
 * @param settings {Object} describes basic application settings
 */
let myApp = new App(routes, controllers, {
    env: 'dev',
    globalController: 'Global'
});

// Start App
/**
 * Kick it up!
 * @param successCallback {Function} optional success callback
 * @param errorCallback {Function} optional error callback
 */
myApp.start(
    function successCallback(activeController){
        // Nothing to do
    }, function errorCallback(error){
        // ERROR?
        console.error(error);
    }
);

// Export app for debug purposes
window.App = App;

