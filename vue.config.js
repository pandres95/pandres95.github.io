module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://pablodorado.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
