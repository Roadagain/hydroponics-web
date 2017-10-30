require('babel-core/register');

module.exports = {
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        filename: './dist/bundle.js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {loader: 'babel-loader'}
                ]
            }
        ]
    }
}
