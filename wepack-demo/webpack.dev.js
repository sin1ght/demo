const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index.tsx',
    devServer: {
        contentBase: './public',
    },
    output: {
        publicPath:'./',
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        // 导入ts 等模块一般不写后缀名，webpack 会尝试使用这个数组提供的后缀名去导入
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias:{
            "@": path.resolve(__dirname, 'src/'),
        }
    },
    module: {
        rules: [
          {
            test: /\.(tsx?|js)$/,
            loader: 'babel-loader',
            options: { cacheDirectory: true },
            include: [
                path.resolve(__dirname, "src")
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html'  // 在  output.path 目录下生成文件
        })
    ]
};

