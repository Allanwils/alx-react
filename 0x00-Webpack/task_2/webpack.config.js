const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'js/dashboard_main.js'),
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  // Add module rules for CSS and images
  module: {
    rules: [
      // Rule to handle CSS files
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Injects CSS into the DOM
          'css-loader',    // Translates CSS into CommonJS
        ],
      },
      // Rule to handle image files
      {
        test: /\.(png|jpg|gif|svg)$/,  // Match image extensions
        type: 'asset/resource',        // For handling images
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};

