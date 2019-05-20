const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

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
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'IM Fell DW Pica' }
        ]
      })
    ]
  }
};
