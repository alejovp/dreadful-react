const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BUILD_GLOBALS = require('./scripts/globals');
const { ENV, APP_DIR, PUBLIC_DIR } = BUILD_GLOBALS;
const isLocalEnv = ENV === 'local';

module.exports = {
    mode: isLocalEnv ? 'development' : 'production',
    devtool: isLocalEnv ? 'source-map' : undefined,
    entry: {
        index: `${APP_DIR}/index.js`
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        open: true,
        compress: true,
        port: 8081,
    },
    output: {
        filename: '[name].bundle.js',
        pathinfo: true,
        sourceMapFilename: '[name].bundlejs.map',
        path: PUBLIC_DIR,
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                include: [APP_DIR],
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
                include: [APP_DIR],
                options: {
                    outputPath: './assets/'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dreadful Tomato',
            hash: true,
            inject: true,
            mobile: true,
            template: `${APP_DIR}/index.ejs`,
            filename: `${PUBLIC_DIR}/index.html`,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            favicons: []
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '__mocks__', 'data.json'),
                    to: `${PUBLIC_DIR}/api-mock/`
                }
            ],
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: ENV === 'stats' ? 'server' : 'disabled'
        })
    ]
};
