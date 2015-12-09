var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src/app'),
    build: path.join(__dirname, 'public')
};

module.exports = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'client.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'App'
        })
    ]
};
