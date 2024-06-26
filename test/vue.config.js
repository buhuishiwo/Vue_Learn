const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 方式一
  // devServer: {
  //   proxy:'http://localhost:8888'
  // },

  // 方式二
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8888',
        pathRewrite:{'^/api':''}
        // ws:true,           //用于支持 websocket
        // changeOrigin:true  //用于控制请求头中的 host 值
      }
    }
  }
})
module.exports = {
  publicPath:'./'
}