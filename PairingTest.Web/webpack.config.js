var webpack = require('webpack');
var htmlWebPlugin = require('html-webpack-plugin');

module.exports = {
    // separate libraries from our code
    entry: {
        vendor: [
            "react",
            "react-dom",
            "redux",
            "react-router",
            "react-redux",
            "redux-thunk",
            "redux-form",
            "lodash",
            "immutability-helper",
        ],
        app: "./Scripts/index.js"
    },
    output: {
        filename: "./Scripts/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './Scripts/vendor.js'
        }),
        // define the debug URL
        new webpack.DefinePlugin({
            ENV_API_URL: "'http://localhost:50014/api/'",
        }),
        // generate the index.cshtml entry point
        new htmlWebPlugin({
            hash: true,
            filename: 'Views/Questionnaire/Index.cshtml',
            template: 'Views/Shared/IndexTemplate.cshtml'
        }),
    ],

    stats: {
        warnings: false
    }
}