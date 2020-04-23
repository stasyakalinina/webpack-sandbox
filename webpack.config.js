module.exports = {
  mode: "development",

  module: {
    rules: [
      //Loading scripts
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        loader: 'babel-loader'
      },
      //Loading images
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      //Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },
      //Loading css
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      //Loading Sass
      {
        test: /\.(s[ca]ss)$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
    ]
  }
};