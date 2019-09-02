import request from './request'
// 访客部分
// 访客申请
export function apply(data) {
  return request({
    url: '/invitation/apply',
    method: 'post',
    data
  })
}
// 邀请信息
export function info(data) {
  return request({
    url: '/invitation/info',
    method: 'post',
    data
  })
}
// 邀请信息无tokenn
export function infoNoToken(data) {
  return request({
    url: '/invitation/temporary/info',
    method: 'post',
    data
  })
}
// 转接同意
export function transferAgree(data) {
  return request({
    url: '/invitation/transfer/agree',
    method: 'post',
    data
  })
}
// 转接拒绝
export function transferDisagree(data) {
  return request({
    url: '/invitation/transfer/disagree',
    method: 'post',
    data
  })
}
// 拒绝临时访客信息
export function temporaryDisDisagree(data) {
  return request({
    url: '/invitation/temporary/disagree',
    method: 'post',
    data
  })
}
// 同意临时访客信息
export function temporaryDisAgree(data) {
  return request({
    url: '/invitation/temporary/agree',
    method: 'post',
    data
  })
}
// 临时访客信息填写
export function temporaryApply(data) {
  return request({
    url: '/invitation/temporary/apply',
    method: 'post',
    data
  })
}
// 历史访客
export function history(data) {
  return request({
    url: '/invitation/history',
    method: 'post',
    data
  })
}
// 邀请函列表 只查询我的
export function list(data) {
  return request({
    url: '/invitation/list',
    method: 'post',
    data
  })
}
// 邀请函列表 查询所有
export function invitation_list(data) {
  return request({
    url: '/cms/invitation/invitation_list',
    method: 'post',
    data
  })
}
// 邀请转接
export function transfer(data) {
  return request({
    url: '/invitation/transfer',
    method: 'post',
    data
  })
}
// 邀请分享
export function share(data) {
  return request({
    url: '/invitation/share',
    method: 'post',
    data
  })
}
// 访客拒绝邀请
export function disagree(data) {
  return request({
    url: '/invitation/disagree',
    method: 'post',
    data
  })
}
// 访客同意邀请
export function agree(data) {
  return request({
    url: '/invitation/agree',
    method: 'post',
    data
  })
}
// 区域列表
export function areaList(data) {
  return request({
    url: '/area/list',
    method: 'get',
    data
  })
}
// 访客系统-消息模块
export function messageList(data) {
  return request({
    url: '/message/list',
    method: 'get',
    params: data
  })
}
// 验证访客邀请码
export function codeVerify(data) {
  return request({
    url: '/invitation/code/verify',
    method: 'post',
    data
  })
}
// 人脸上传
export function uploadFacePic(data) {
  return request({
    url: '/invitation/uploadFacePic',
    method: 'post',
    data
  })
}
// 发送验证码
export function sendCode(data) {
  return request({
    url: 'invitation/temporary/sendCode',
    method: 'post',
    data
  })
}
// 搜索访客信息
export function searchVisitor(data) {
  return request({
    url: 'invitation/search',
    method: 'post',
    data
  })
}

