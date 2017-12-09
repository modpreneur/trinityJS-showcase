'use strict';

let path = require('path'),
    colors = require('colors'),
    express = require('express'),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    bodyParser = require('body-parser')
    ;

// Create app
let app = express();

/** Application Setup **/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Static files
app.use(express.static(path.join(__dirname, 'public'))); // Normal static
app.use(express.static(path.join(__dirname, '../dist'))); // Frontend compiled JS

app.locals = {
    navigation: {
        home: {
            label: 'Home',
            href: '/'
        },
        form:{
            label: 'Form test',
            href: '/form'
        },
        admin:{
            label: 'Administration',
            href: '/admin'
        },
        trinityTab: {
            label: 'Trinity Tab',
            href: '/trinity-tab'
        },
        nested: {
            label: 'Nested',
            href: '/nested'
        }
    }
};

/** *************************************************************************** **/
/** Routes setup  **/
/** GET **/
app.get('/', (req, res)=>{
    res.render('index', { activeNavigation: 'home'});
});
app.get('/admin', (req, res)=>{
    res.render('index', { activeNavigation: 'admin'});
});
app.get('/form', (req, res)=>{
    res.render('form', { activeNavigation: 'form'});
});
app.get('/trinity-tab', (req, res)=>{
    res.render('trinity-tab', { activeNavigation: 'trinityTab'});
});

app.get('/trinity-tab/tab/show', (req, res)=>{
    res.render('tabs/show');
});

app.get('/trinity-tab/tab/edit', (req, res)=>{
    res.render('tabs/edit', { activeNavigation: 'trinityTab'});
});

app.get('/trinity-tab/tab/third', (req, res)=>{
    res.render('tabs/third', { activeNavigation: 'trinityTab'});
});

app.get('/nested', (req, res)=>{
    res.render('nested', { activeNavigation: 'nested'});
});

app.get('/nested/first', (req, res)=>{
    res.render('nested/index', { activeNavigation: 'nested',  name: 'first'});
});

app.get('/nested/second', (req, res)=>{
    res.render('nested/index', { activeNavigation: 'nested', name: 'second'});
});

app.get('/nested/third', (req, res)=>{
    res.render('nested/index', { activeNavigation: 'nested', name: 'third'});
});



/** POST **/
app.post('/form', upload.fields([{name: 'photo'}]), (req, res)=>{
    console.log(req.headers);
    //console.log(req.headers);
    console.log(req.body);
    console.log(req.files);
    setTimeout(()=>{
        console.log('dfsdfdsfds');
        return res.status(302).json({'location': '/'});

    }, 2000);
    //return res.status(200).json({'message': 'OK'});
});

let fileUpload = upload.fields([{name: 'files', maxCount: 2}]);
//let fileUpload = upload.array();
app.post('/process-file', fileUpload, (req, res)=>{
    console.log('###### HEADERS');
    console.log(req.headers);
    console.log('###### BODY');
    console.log(req.body);
    //console.log(req.body.photos[0]);
    console.log('###### FILES');
    console.log(req.files);
    res.json({'message': 'OK'});
});

/** *************************************************************************** **/
/** START SERVER **/
let server = app.listen(3000, ()=>{
    let host = server.address().address,
        port = server.address().port;

    console.log('Example app listening at http://%s:%s', colors.red(host), colors.yellow(port));
});