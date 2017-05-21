'use strict';

import _ from 'lodash';
import $ from 'jquery';
import Controller from 'trinity/Controller';
import TrinityTab from 'trinity/components/TrinityTab';
import Events from 'trinity/utils/Events';

class MyTab extends TrinityTab {
    constructor(heads, configuration){
        super(heads, configuration);
        $('.tab-body-wrapper').css('overflow', 'hidden');
    }

    __attachHeadClickEvents(){
        return _.map(this.heads, (head) => {
            return Events.listen(head, 'click', () => {
                let tabIdActual = this.__activeTabName;
                let tabIdNext = head.id;

                let actualTab = this.tabs[tabIdActual];
                let newTab = this.tabs[tabIdNext];


                let actualBody = actualTab.body;
                let newBody = newTab.body;

                let width = Math.ceil(+$('.tab-body-wrapper').css('width').match(/\d+\.\d+/));
                console.log('width with css()', width);
                console.log('width with css()', $('.tab-body-wrapper').css('width'));

                if(!newTab.loaded){
                    newTab.loadContent(()=>{});
                }

                let acI = +tabIdActual.match(/\d+/),
                    neI = +tabIdNext.match(/\d+/);

                console.log('actual', acI, 'new', neI);
                // now animate ?
                if(acI < neI){
                    // from right to left
                    $(newBody).css({
                        opacity: 1,
                        top: 0,
                        position: 'relative',
                        right: `-${width}`,
                        left: '',
                        transition: '1s'
                    });

                    _.defer(() => {

                        $(actualBody).css({
                            left: `-${width}`
                        });
                        $(newBody).css({
                            right: 0
                        });
                        setTimeout(() => {
                            $(newBody).attr('style', '');
                            $(actualBody).attr('style', '');
                        }, 1000)
                    });
                } else {
                    // from left to right
                    $(newBody).css({
                        opacity: 1,
                        top: 0,
                        position: 'relative',
                        left: `-${width}`,
                        right: '',
                        transition: '1s'
                    });
                    _.defer(() => {
                        $(actualBody).css({
                            right: `-${width}`
                        });
                        $(newBody).css({
                            left: 0
                        });
                        setTimeout(() => {
                            $(newBody).attr('style', '');
                            $(actualBody).attr('style', '');
                        }, 1000)
                    });
                }

                this.setActiveTab(tabIdNext);
            });
        });
    }
}



export default class TrinityTabController extends Controller {
    indexAction($scope){
        const SHOW_TAB = 'tab1',
            EDIT_TAB = 'tab2',
            THIRD_TAB = 'tab3';


        let tab = new MyTab($('.tab-head'), {
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