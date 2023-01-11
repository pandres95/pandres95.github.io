const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://pablodorado.com/',
        ws: true,
        changeOrigin: true
      },
      '^/blog': {
        target: 'https://pablodorado.com/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true
            }
          }
        })
      ]
    }
  }
};
