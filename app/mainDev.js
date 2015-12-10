import externalHelpers from 'babel/external-helpers'; // Important for correct babel translation
import 'trinity/devTools'; // important for correct behaviour of trinity components in dev
import routes from './routes.js';
import TrinityApp from 'trinity/App';


let settings = {
    environment: 'dev',
    debug: true
};

// Create App
/**
 * TrinityApp(routes, controllers, settings)
 *  - creates new Application wrapper
 * @param routes {Array} describing routes
 * @param controllers {Object} contains name:class Controllers
 *  - Not necessary in development environment
 * @param settings {Object} describes basic application settings
 */
let App = new TrinityApp(routes, null, settings);

// Start App
/**
 * App.devStart(path, successCallback, errorCallback) method
 *  - Kick up application
 * @param path {String} where to look for controller
 *  - used for async lazy load of controller file described in routes array
 * @param successCallback {Function} optional success callback
 * @param errorCallback {Function} optional error callback
 */
App.devStart('app/Controllers',
    function successCallback(isRoute){
        console.log('App Loaded!');
        if(!isRoute){
            console.log('INFO: This route doesn\'t have any controller!');
        }
    }, function errorCallback(error){
        console.error(error);
    }
);

// Export app for debug purposes
window.App = App;

