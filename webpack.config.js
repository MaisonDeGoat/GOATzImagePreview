import path from 'path';

module.exports = {
    loaders: [
        { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ],
    resolve: {
        modules: ['node_modules'],
        alias: {
            public: path.join(__dirname, './public')
        }
    },
}