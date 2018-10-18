const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const basePath = path.join(__dirname, 'src', 'pages');

module.exports = {
    entry: {
        'main': path.join(basePath, 'main', 'main.js'),
        'core': path.join(__dirname, 'src', 'js', 'core.js')
    },

    output: {
        path: path.join(__dirname, 'static'),
        filename: 'js/[name].js'
    },

    watch: NODE_ENV === 'development',

    mode: NODE_ENV === 'development' ? 'development' : 'production',

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./static/js/library.json')
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                sideEffects: false
            },
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'node_modules', 'devbridge-autocomplete'),
                    path.join(__dirname, 'node_modules', 'select2'),
                    path.join(__dirname, 'node_modules', 'lightslider')
                ],
                loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window,define=>false'
            },
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'node_modules', 'owl.carousel')
                ],
                loader: 'imports-loader?jQuery=jquery,$=jquery,window=>global&window.jQuery=jquery,this=>window,define=>false'
            }
        ]
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                beautify: false,
                comments: false,
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true
                }
            }
        })
    );
}
