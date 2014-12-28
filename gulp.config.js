module.exports = function() {
    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client + 'app/';
    var root = './';
    var specRunnerFile = 'specs.html';
    var temp = './.tmp/';

    var config = {
        root: root,
        client: client,
        server: server,
        source: 'src/',
        htmltemplates: clientApp + '/**/*.html',
        css: temp + '/styles.css',
        less: client + '/styles/styles.less',
        html: client + '/**/*.html',
        index: client + '/index.html',
        js: [
            clientApp + '/**/*.module.js',
            clientApp + '/**/*.js',
            '!' + clientApp + '/**/*.spec.js'
        ],
        specs: [
            clientApp + '/**/*.spec.js'
        ],
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        plato: {
            js: clientApp + '/**/*.js'
        },
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + '/images/**/*.*',
        build: './build/',
        temp: temp,
        report: './report/',

        specHelpers: [client + '/test-helpers/lib/*.js'],
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,
        testlibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ],
        serverIntegrationSpecs:[
            client + '/test-helpers/server-integration/**/*.spec.js'
        ],

        nodeServer: './src/server/app.js',
        defaultPort: '7202',
        browserReloadDelay: 1000,
        templateCache: {
            module: 'templates',
            standAlone: true,
            file: 'templates.js',
            root: 'app/'
        },
        bower: {
            directory: './bower_components/',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ]
    };

    return config;
};
