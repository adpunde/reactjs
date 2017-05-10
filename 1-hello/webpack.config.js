var path = require('path');

var config = {
    entry: './main.js',

    output: {
        path: path.resolve('./'),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 4000,
        host: '192.168.1.100'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
