'use strict';

import Controller from 'trinity/Controller';

export default class AdminController extends Controller {
    indexAction($scope){
        console.log('Hello from admin page');
    }
}