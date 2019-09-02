import request from './request'
// 人员
// 通讯录人员列表
export function userList_visitor(data) {
  return request({
    url: '/user/mobile/list',
    method: 'post',
    data
  })
}
// 人员详情
export function staffInfo(data) {
  return request({
    url: '/user/staffInfo',
    method: 'post',
    data
  })
}
// 用户信息  只有正式环境才能返回数据
export function userInfo(data) {
  return request({
    url: '/user/info',
    method: 'get',
    params: data
  })
}
// 用户信息  只有正式环境才能返回数据
export function getUserToken(data) {
  return request({
    url: '/wechat/getToken',
    method: 'get',
    params: data
  })
}
// 用户信息  只有正式环境才能返回数据file
export function userLogOut(data) {
  return request({
    url: '/user/logOut',
    method: 'get',
    data
  })
}
// 搜索联系人  包含部门
export function mobileSearch(data) {
  return request({
    url: '/user/mobile/search',
    method: 'post',
    data
  })
}
// 查询部门下的联系人
export function getDepartmentMember(data) {
  return request({
    url: '/user/getDepartmentMember',
    method: 'post',
    data
  })
}
// 访客通讯录
export function visitorList(data) {
  return request({
    url: '/invitation/visitor/visitorList',
    method: 'post',
    data
  })
}
// 访客通讯录新增
export function addVisitor(data) {
  return request({
    url: '/invitation/visitor/addVisitor',
    method: 'post',
    data
  })
}
// 检测访客是否存在
export function visitorIsExist(data) {
  return request({
    url: '/invitation/visitor/visitorIsExist',
    method: 'post',
    data
  })
}

// 上传头像
export function uploadHeader(file) {
  return request.post('/user/uploadHeader', file, { headers: { 'Content-Type': 'multipart/form-data' }})
}
