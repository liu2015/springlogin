'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
// F:\vue\springlogin07\springlogin07\settings.js

function resolve(dir){
  return path.join(__dirname,dir)

}

const name=defaultSettings.title || '系统'
const port=process.env.port || process.env.npm_config_port || 80

module.exports={

  publicPath:process.env.NODE_ENV==="production"?"/":"/",

  outputDir:'dist',
  assetsDir:"static",
  lintOnSave:process.env.NODE_ENV==='development',
  productionSourceMap: false,

  devServer:{
    host:'0.0.0.0',
    port:port,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:'http://localhost:8080',
        changeOrigin:true,
        pathRewrite:{
          ['^'+process.env.VUE_APP_BASE_API]:''
        }
      }
    },
    disableHostCheck:true
  },
  //配置替换 用@ 代替'src'
    configureWebpack:{
      name:name,
      resolve:{
        alias:{
          '@':resolve('src')
        }
      }
    },



}
