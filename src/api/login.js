import request from './request'
// 示例模板
export function loginByUsername() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}
export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}
export function getUserInfo() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}
// 登录
export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 修改密码
export function modifyPassword(data) {
  return request({
    url: '/user/modifyPassword',
    method: 'post',
    data
  })
}
// 忘记密码
export function forgetPassword(data) {
  return request({
    url: '/user/forgetPassoword',
    method: 'post',
    data
  })
}
// 忘记密码发送短信
export function forgetSms(data) {
  return request({
    url: '/user/forgetSms',
    method: 'post',
    data
  })
}
// 获取图形验证码
export function picCode(data) {
  return request({
    url: '/invitation/temporary/picCode',
    method: 'get',
    params: data
  })
}
// 获取基本配置
export function getSystem(data) {
  return request({
    url: '/system/mobile/getSystem',
    method: 'get',
    params: data
  })
}
// 获取基本配置-PC
export function getSystemPC(data) {
  return request({
    url: '/system/getSystem',
    method: 'get',
    params: data
  })
}
