/*
 * @Description: file description
 * @Author: LiuHuaifu
 * @Date: 2019-12-07 08:36:24
 * @LastEditors: your name
 * @LastEditTime: 2019-12-07 08:43:43
 */
const CompressionPlugin = require("compression-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    publicPath: isProduction ? '/PersonalBlog' : '',

    productionSourceMap: false,

    outputDir: 'PersonalBlog',

    configureWebpack: config => {
        if (!isProduction) return;
        config.plugins.push(new CompressionPlugin({
            test: /\.js$|\.css$|.html$/,
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }));
    }
}