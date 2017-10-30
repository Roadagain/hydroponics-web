require('babel-core/register');

module.exports = {
    entry: './src/index.jsx',

    output: {
        path: './dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.jsx', '.js']
    },
}
