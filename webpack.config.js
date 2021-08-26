const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: { 
        polyfills: '@babel/polyfill',
        bundle: './src/index.tsx' 
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {   // 1
                test: /\.(ts|js)x?$/,
                exclude: '/node_module/',
                use: [
                    { 
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'react-hot-loader/babel',
                            ]
                        },
                    },
                ],
            },
            {   // 2
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {   // 3
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {   // 4
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ // 각 파일 형식으로 번들링 된 파일을 index.html에 자동으로 넣어줌
            template: './public/index.html'
        }),
    ],
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true
    },
}