import request from './request'

/** *********  会议室   ************/

// 会议室列表
export function roomList(kind) {
  return request.post('/manage/roomList', { kind })
}

// 会议室详情
export function roomInfo(id) {
  return request.post('/manage/roomInfo', { id })
}

/** *********  会议   ************/

export function getMeetingApproval() {
  return request.get('/meeting/getMeetingApproval')
}

/**
 *  我的会议列表
 *
 * @export
 * @param {number} [offset=1] 页
 * @param {number} [count=10] 每页数量
 * @returns
 */
export function MeetingList(offset = 1, limit = 10) {
  return request.post('/meeting/list', { offset, limit })
}

/**
 * 历史会议
 *
 * @export
 * @param {*} [data={ offset: 1, limit: 10 }]
 * @returns
 */
export function historyList(data = { offset: 1, limit: 10 }) {
  return request.post('/history/list', { start_time: 0, end_time: Date.now(), ...data })
}

/**
 * 会议详情
 *
 * @export
 * @param {number} id 会议id
 * @returns
 */
export function meetingInfo(id) {
  return request.post('/meeting/info', { id })
}

//  CU 会议
export function meetingInsertOrEdit(params) {
  return request.post('/meeting/meetingInsertOrEdit', params)
}

// 删除会议
export function meetingDelete(meeting_id) {
  return request.post('/meeting/meetingDelete', { meeting_id })
}

/* export function meetingInsertOrEdit(params) {
  return request({
    method: 'post',
    url: '/meeting/meetingInsertOrEdit',
    data: params,
    headers: { 'Content-Type': 'multipart/form-data' }
  }

  )
} */

/**
 *  同意会议
 *
 * @export
 * @param {*} meeting_id 会议id
 * @param {*} id 私信id
 * @returns
 */
export function agreeMeeting(meeting_id) {
  return request.post('meeting/agreeMeeting', { meeting_id })
}

// 拒绝会议 同上
export function refuseMeeting(meeting_id) {
  return request.post('/meeting/refuseMeeting', { meeting_id })
}

// 驳回会议
export function rejectMeeting(meeting_id, reject_reason) {
  return request.post('/meeting/rejectMeeting', { meeting_id, reject_reason })
}

/**
 * 审批会议列表
 *
 * @export
 * @param {number} [offset=1]
 * @param {number} [limit=10]
 * @param {number} [type=4] 0-待审批 1-已审批 2-驳回 4-all
 * @returns
 */
export function approvalMeetingList(offset = 1, limit = 10, type = 4) {
  return request.post('/meeting/approvalMeetingList', { offset, limit, type })
}

// 审批会议
export function approveMeeting(meeting_id) {
  return request.post('meeting/approveMeeting', { meeting_id })
}

/** *********  消息   ************/

export function messageList() {
  return request.get('/message/messageList')
}

export function messageInfo(id) {
  return request.post('/message/messageInfo', { id })
}

// 私信
export function secretmessageList() {
  return request.get('/message/secretmessageList')
}

export function secretmessageInfo(id) {
  return request.post('/message/secretmessageInfo', { id })
}

/** *********  通讯录   ************/
/**
 * 用户列表
 * @export
 * @param {*} is_all 是否返回全部数据
 * @param {*} offset ...
 * @param {*} limit ...
 * @returns
 */
export function userList(is_all, offset = 1, limit = 10) {
  const params = is_all ? { is_all } : { is_all, offset, limit }
  // console.log(params)
  return request.post('/user/userList', { ...params })
}

// 用户信息
export function otherUserInfo(id) {
  return request.post('/manage/userInfo', { id })
}

// 个人信息
export function userInfo() {
  return request.get('/user/info')
}

/**
 * 部门列表 组织构架
 */

export function getdepartmentList() {
  return request.get('/user/getdepartmentList')
}

export function getDepartmentMember(department_id, offset = 1, count = 10) {
  return request.post('/user/getDepartmentMember', { department_id, offset, count })
}

// templete
/*
  export function(){
    return request
  }
 */
