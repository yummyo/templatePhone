import request from './request'
// 示例模板
export function infoDetail(data) {
  return request({
    url: '/message/messageInfo',
    method: 'post',
    data
  })
}
export function messageList(data) {
  return request({
    url: '/message/messageList',
    method: 'post',
    data
  })
}
