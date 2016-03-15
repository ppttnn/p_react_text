var path = require('path');
var config = {
    srcPath: "./src/app/"
};
module.exports = {
    entry: {
        app:"./src/app/js/app.js",
        // login:"./src/app/js/login.js"
    },
    resolve: {  // 请求重定向
    alias: {
      img: path.resolve(config.srcPath + 'images'),
      scss: path.resolve(config.srcPath + 'scss'),
      config: path.resolve(config.srcPath + 'js/config'),
    }
  },
    output: {
        filename: "[name].min.js",
        // filename: "[name].[hash].min.js",
        path:  "./dist/assets/app/js",
        publicPath: "/assets/app/js/"
    },
    // devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [ "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
              test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.css$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ],
    },
}
