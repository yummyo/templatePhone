import request from './request'

export function regionList(data) {
  return request({
    url: '/region/regionList',
    method: 'get',
    data
  })
}

// ******************预定工位******************
// 工位设备
export function equipment(data) {
  return request({
    url: '/region/equipment',
    method: 'get',
    data
  })
}
// 区域所有工位信息
export function positionList(data) {
  return request({
    url: '/region/positionlist',
    method: 'post',
    data
  })
}
// 预定时单个工位信息
export function positionUseInfo(data) {
  return request({
    url: '/region/positionUseInfo',
    method: 'post',
    data
  })
}
// 预约工位确认添加信息，取消预定，延迟时间
export function positionUseInsertOrEdit(data) {
  return request({
    url: '/region/positionUseInsertOrEdit',
    method: 'post',
    data
  })
}
// 是否需要审核
export function regionConfig(data) {
  return request({
    url: '/region/regionConfig',
    method: 'get',
    data
  })
}

// **********************预定结果*************************
//  单个预定详情
export function getPosition(data) {
  return request({
    url: '/region/getPosition',
    method: 'post',
    data
  })
}
// 我的预定列表
export function myRegionList(data) {
  return request({
    url: 'region/myRegionList',
    method: 'post',
    data
  })
}

// ************历史**************************
// 历史工位列表
export function myRegionHistoryList(data) {
  return request({
    url: '/region/myRegionHistoryList',
    method: 'post',
    data
  })
}
//* ***********扫一扫**************
// 扫一扫
export function getJsConfig(data) {
  return request({
    url: 'wechat/getJsConfig',
    method: 'post',
    data
  })
}
// 签到
export function signIn(data) {
  return request({
    url: '/region/signIn',
    method: 'post',
    data
  })
}
// 判断位置操作的存在性
export function signInOrSignOff(data) {
  return request({
    url: '/region/signInOrSignOff',
    method: 'get',
    params: data
  })
}

// 报修
export function repair(data) {
  return request({
    url: '/region/repair',
    method: 'post',
    data
  })
}
//* *****************日程****************
export function calendarList(data) {
  return request({
    url: '/meeting/calendar',
    method: 'post',
    data
  })
}
