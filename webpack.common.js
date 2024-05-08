const path = require('path');

 const HtmlWebpackPlugin = require('html-webpack-plugin');


 module.exports = {
   entry: {
     main: './src/JS/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       filename: 'index.html',
       template: './src/index.html',
       chunks: ['main']
     }),
  
     new HtmlWebpackPlugin({
      title: 'About',
      filename: 'about.html',
      template: './src/about.html',
      chunks: ['main']
     })
     

   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },

        {
            test: /\.mp4$/,
            use: 'file-loader?name=videos/[name].[ext]',
        }
    ]
   }
 };