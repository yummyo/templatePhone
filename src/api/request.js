import axios from 'axios'
import { ToastPlugin, LoadingPlugin } from 'vux'
import Vue from 'vue'
import { getToken } from '@/common/js/auth'
import { joinUrl } from '@/common/js/util'

Vue.use(ToastPlugin, { position: 'top' })
Vue.use(LoadingPlugin)
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 300000 // request timeout,
  /*  headers: {
    'Content-Type': 'application/json'
  } */
})

// request interceptor
service.interceptors.request.use(
  config => {
    let info = ''
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    if (
      config['url'].indexOf('temporary/sendCode') > -1 ||
      config['url'].indexOf('temporary/apply') > -1
    ) {
      // 如果是发送验证码 或者 临时访客  增加token
      config.headers['Access-token'] = config.data.phone
    } else if (config['url'].indexOf('/uploadFacePic') > -1) {
      info = '正在上传'
    }
    Vue.$vux.loading.show(info)
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    // 如果开启记录数据就向
    if (process.env.SAVE_DATA == 'true') {
      let ajaxData = window.localStorage.getItem('ajaxData') || '{}'
      ajaxData = JSON.parse(ajaxData)
      // 拼接url和data 以便分页也能存储
      ajaxData[
        joinUrl(
          response['config']['url'],
          response['config']['data']
            ? JSON.parse(response['config']['data'])
            : {}
        )
      ] = response['data']
      window.localStorage.setItem('ajaxData', JSON.stringify(ajaxData))
    } else {
      window.localStorage.setItem('ajaxData', '{}')
    }
    Vue.$vux.loading.hide()
    const res = response.data
    if (res.code && res.code !== 10000) {
      Vue.$vux.toast.text(res.msg, 'middle')
      return Promise.reject('error')
    } else {
      return response.data
    }
  },

  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    Vue.$vux.loading.hide()
    console.log('err' + error) // for debug
    Vue.$vux.toast.text(error.response.msg || '网络异常', 'middle')
    return Promise.reject(error)
  }
)

export default service
