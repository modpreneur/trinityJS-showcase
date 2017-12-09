'use strict';

import $ from 'jquery';
import Controller from 'trinity/Controller';

export default class AdminController extends Controller {
    indexAction($scope){
        $('#js-box').html(`first or sencond action: ${window.location.pathname}`);
    }
    thirdAction() {
        $('#js-box').html('third action');
    }
}