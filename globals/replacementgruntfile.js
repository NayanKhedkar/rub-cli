var path = require("path");

module.exports = function(grunt) {

    var rootPath = path.join(__dirname, "../../");

    var helpers = require(path.join(rootPath, 'grunt/helpers'))(grunt);

    require('load-grunt-config')(grunt, {
        data: helpers.generateConfigData(),
        configPath: path.join(rootPath, 'grunt/config'),
        jitGrunt: {
            customTasksDir: path.join(rootPath, 'grunt/tasks'),
            staticMappings: {
                bower: 'grunt-bower-requirejs'
            }
        }
    });

    grunt.config('helpers', helpers);

};
