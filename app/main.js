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
let myApp = new App(routes, controllers, {});

// Start App
/**
 * Kick it up!
 * @param successCallback {Function} optional success callback
 * @param errorCallback {Function} optional error callback
 */
myApp.start(
    function successCallback(smt){
        console.log('START', smt)
    },
    function errorCallback(error){
        console.error(error);
    }
);
