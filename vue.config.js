//反向代理
module.default = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.youngam.cn/miaoApi/',
        changeOrigin: true,
      }
    }
  }
}