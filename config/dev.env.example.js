'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  //  微信用跳转链接
  OUTSIDE_URL: '"http://dsg123.w3.luyouxia.net"',
  //  鹏飞
  APPID: '"wwc7bc612338f9db0a"',
  //  访客可作为单独模块  开启时别的入口会提示暂未开放
  PAGE_TYPE: '""',
  //  模拟token 测试环境使用 开启时会向缓存中填入token
  MOCK_TOKEN: '"dev_visitor"',
  MOCK_DATA: '"false"',
  BASE_API: '"https://workwx.netbiu.com:4430"',
})
