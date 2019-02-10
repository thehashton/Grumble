const path = require("path") 

// Require the new plugin
const HtmlWebpackPlugin = require("html-webpack-plugin") 

const webpack = require('webpack');

module.exports = { 
  entry: path.join(__dirname,'src','index.tsx'),
  devtool: "source-map",
  resolve: { 
    extensions: [".ts", ".tsx", ".js", ".json"] 
  },
  devServer: {
    contentBase: path.join(__dirname,'src')
  },
  output: { 
    path: path.join(__dirname,'dist'),
    filename: 'index_bundle.js'
  }, 
  mode: process.env.NODE_ENV || 'development',
  module: { 
    rules: [
       {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: 'babel-loader'
       },
       {  
        test: /\.tsx?$/,  
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        query: {
            presets: ['react', 'es2015']
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname,'public','index.html')
    })
  ]
};