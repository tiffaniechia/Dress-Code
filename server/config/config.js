var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

var setEnvConfigs = {
    development: {
        db: 'mongodb://localhost/dresscodefordeloitte',
        rootPath: rootPath,
        port: process.env.PORT || 8080

    },
    production: {
        db: 'mongodb://adminUser:admincat@ds031271.mongolab.com:31271/dresscodefordeloitte',
        rootPath: rootPath,
        port: process.env.PORT || 8080
    }
};

module.exports = setEnvConfigs;