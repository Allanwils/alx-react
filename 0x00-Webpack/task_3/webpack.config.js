const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Import CleanWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // Set the mode to development
  
  // Enable inline source mapping for debugging
  devtool: 'inline-source-map',

  entry: {
    header: path.resolve(__dirname, 'modules/header/header.js'),
    body: path.resolve(__dirname, 'modules/body/body.js'),
    footer: path.resolve(__dirname, 'modules/footer/footer.js'),
  },

  output: {
    filename: '[name].bundle.js',  // Generates header.bundle.js, body.bundle.js, footer.bundle.js
    path: path.resolve(__dirname, 'public'),  // Output directory
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Match image extensions
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

  // Add the necessary plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Dashboard',   // Set the title for the HTML file
      //template: path.resolve(__dirname, 'public/template.html'), // Optional: if you have a custom template
      filename: 'index.html',  // Name of the HTML file to be created in the output directory
    }),
    new CleanWebpackPlugin(),  // Clean the output folder on each build
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' }, // Copies assets to the output folder
      ],
    }),
  ],

  // Enable chunk splitting
  optimization: {
    splitChunks: {
      chunks: 'all',  // Split all chunks
    },
  },

  // Set up the development server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),  // Serve content from the public directory
    },
    port: 8564,   // Specify the port for the development server
    compress: true,  // Enable gzip compression for everything served
    open: true,  // Automatically open the browser
    hot: true,   // Enable Hot Module Replacement
  },
};