import request from './request'
// 审核列表
export function getAllApproval(data) {
  return request({
    url: '/region/getAllApproval',
    method: 'post',
    data
  })
}
