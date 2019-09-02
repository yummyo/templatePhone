
import Mock from 'mockjs' // 引入mockjs，npm已安装
import { joinUrl } from '@/common/js/util'
import axios from 'axios'

// import { Random } from 'mockjs'
// mock一组数据
let Obj = {}
let ajaxData = {}
axios.get('/static/ajaxData.json').then(res => {
  ajaxData = res.data
  console.log('模拟数据')
  console.log(ajaxData)
})
Mock.mock(/^((?!static).)*$/, (res) => {
  // let ajaxData = window.localStorage.getItem('ajaxData') || '{}'
  // ajaxData = JSON.parse(ajaxData)
  Obj = ajaxData[joinUrl(res['url'], JSON.parse(res['body']))]
  return Obj
})
