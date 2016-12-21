module.exports = {
    entry: __dirname + '/src/header.js',
    output: {
        path: __dirname + '/dist',
        filename: 'header.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
