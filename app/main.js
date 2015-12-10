import routes from './routes.js';
import controllers from './controllers.js';
import TrinityApp from 'trinity/App';


let settings = {
    environment: 'production',
    debug: false
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
let App = new TrinityApp(routes, controllers, settings);

// Start App
/**
 * App.start() method
 *  - Kick up application
 * No other parameters needs to be defined
 */
App.start();
