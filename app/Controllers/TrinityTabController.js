'use strict';

import $ from 'jquery';
import Controller from 'trinity/Controller';
import TrinityTab from 'trinity/components/TrinityTab2';

export default class TrinityTabController extends Controller {
    indexAction($scope){
        const SHOW_TAB = 'tab1',
            EDIT_TAB = 'tab2',
            THIRD_TAB = 'tab3';


        let tab = new TrinityTab($('.tab-head'), {
            [SHOW_TAB] : {
                onLoad: (...params) => {
                    console.log('onLoad function called', params)
                },
                onActive: (...params) => {
                    console.log('onActive called', params);
                },
                onDelete: (...params) => {
                    console.log('onDelete called', params);
                }
            }
        });
        console.log(tab);
    }
}