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
                onLoad: (tab) => {
                    console.log('onLoad function called', tab)
                },
                onActive: (tab, prevTabId) => {
                    console.log(`onActive called. Active tab: ${tab.id}, previous tab: ${prevTabId}`);
                },
                onDelete: (tab, forced) => {
                    console.log(`onDelete called for tab: ${tab.id} with forced flag: ${forced}`);
                }
            }
        });
    }
}