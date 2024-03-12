const { defineConfig } = require('@vue/cli-service')

const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        name: 'vue-three.js',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new NodePolyfillPlugin(),
            new webpack.DefinePlugin({
            })
        ],
        module: {
            rules: [
            ]
        }
    },
    // 生产环境不生成source map, map文件用于开发阶段调试用
    productionSourceMap: false,
})