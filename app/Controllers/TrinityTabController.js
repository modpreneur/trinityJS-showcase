'use strict';

import Controller from 'trinity/Controller';
import TrinityTab from 'trinity/components/TrinityTab2';

export default class TrinityTabController extends Controller {
    indexAction($scope){
        let tab = new TrinityTab();
        console.log(tab);
    }
}