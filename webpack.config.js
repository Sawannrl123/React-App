const path = require('path');
const webpack = require('webpack');

var config = {
   entry: './main.js',
	
   output: {
      path: __dirname,
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      rules: [
            {
                test: /\.css$/,
                use: ['style-loader/useable', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                use: ['file-loader']
            }
        ]
   }
}

module.exports = config;