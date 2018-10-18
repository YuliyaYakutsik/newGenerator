const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [__dirname, 'node_modules']
    },
    entry: {
        library: [
            'jquery',
            'jquery-validation',
            'inputmask'
        ]
    },
    output: {
        filename: '[name].dll.js',
        path: path.join(__dirname, 'static', 'js'),
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: './static/js/[name].json'
        })
    ]
};
