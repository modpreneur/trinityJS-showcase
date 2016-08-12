'use strict';

import Controller from 'trinity/Controller';
import MyForm from '../Lib/MyForm';

export default class IndexController extends Controller {
    indexAction($scope){
        console.log('Hellow from index page');
    }

    formAction($scope){
        let testForm = new MyForm($scope['test-form']);
        testForm.settings.errorTemplate = (msg, type, id) => {
            return `<div id="${id}"><span>${type}</span>${msg}</div>`;
        };
        testForm.addError('name', {
            id: 'long_name',
            isHtml: true,
            message: '<div style="color: red;">Name has to be at least 6 characters long.</div>',
            validate: val => val.length > 5
        });

        testForm.setMessage('name', 'testMessage');

        testForm.addError('name', {
            id: 'default_message',
            message: 'Not a tempalte'
        }, 'error', 'default_message');

        window.testForm = testForm;
        window.removeError = (name, id) => testForm.removeError(name, id);
        window.removeAll = (name) => testForm.removeError(name);
        window.addError = (name, error) => testForm.addError(name, error);
        //
        // testForm.addError('name', {
        //     message: 'Name has to be in camel case.',
        //     validate: val => val === val.toUpperCase()
        // });

        // testForm.addError('name', 'Name has to be in camel case.');
        //
        // console.log(testForm);

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