'use strict';

let path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

console.log(process.env.NODE_ENV);



let config = null;

switch (process.env.NODE_ENV){
    case 'dev':{
        config = require(path.join(__dirname, './env/dev.config.js'))
    } break;
    default: {
        config = require(path.join(__dirname, './env/dev.config.js'))
    } break;
}

/** CONTRIBUTORS PART, DO NOT COPY!! **/
    __addTrinityJSAlias(config);
/** END **/

module.exports = config;


function __addTrinityJSAlias(conf){
    conf.resolve = conf.resolve || {};
    conf.resolve.alias = conf.resolve.alias || {};
    conf.resolve.alias.trinity = path.join(__dirname, '../trinityJS/src');
}