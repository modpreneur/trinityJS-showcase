'use strict';

import Controller from 'trinity/Controller';
import MyForm from '../Lib/MyForm';

export default class IndexController extends Controller {
    indexAction($scope){
        console.log('Hellow from index page');
    }

    formAction($scope){
        let testForm = new MyForm($scope['test-form']);

        console.log(testForm);

        //let tt = new TrinityForm($scope['test-form']);
        //tt.success(function(res){
        //    console.log(res);
        //});
        //tt.error(function(err){
        //    console.log('ERROR');
        //    console.log(err);
        //});
        //tt.addListener('submit-data', (e)=>{
        //    console.log('DATA', e);
        //});
        //tt.on('progress', (e)=>{
        //    console.log(e);
        //});
        //console.log('REBUILD');
        //let call = (e)=>{
        //    let fileList = $scope['testFile'].files;
        //    Gateway.sendFile('/process-file', 'POST', fileList, null, (res)=>{
        //        console.log('OK', res);
        //    }, (err, res)=>{
        //        console.log(res);
        //        console.log({'tt': err});
        //        console.error(err);
        //    });
        //};
        //Events.listen($scope.sendFileBtn, 'click', call);
    }

    beforeAction(){
        console.log('BEFORE ACTION');
    }

    afterAction(){
        console.log('AFTER ACTION');
    }
}