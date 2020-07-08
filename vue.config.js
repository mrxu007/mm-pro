//vue.config.js
const {resolve} = require('path');
module.exports = {
  //暂时关闭eslint语法检测
  // lintOnSave: false,
  //配置webpack
  configureWebpack: {
    //配置alias别名
    resolve: {
      // extensions: [".js", ".json", ".jsx", ".css", ".vue"],
      alias: {
        //'@' : 'src'
        'assets' : '@/assets',
        'common' : '@/common',
        'components' : '@/components',
        'network' : '@/network'
      }
    }
  }
}