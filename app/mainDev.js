'use strict';

import routes from './routes.js';
import controllers from './controllers.js';
import App from 'trinity/App';

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
 * App.devStart(path, successCallback, errorCallback) method
 *  - Kick up application
 * @param path {String} where to look for controller
 *  - used for async lazy load of controller file described in routes array
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

