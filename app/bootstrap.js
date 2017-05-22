'use strict';

/**
 * Bootstrap function which will be launched before Controller Action
 * @param $scope {Object}
 */
function bootstrap($scope) {
    // This is bootstrap function
    // You have access to all 'data-ng-scope' elements

    console.log(Object.keys($scope));
}

export default bootstrap;