/**
 *
 *
 * @export 周几
 * @param {*} day Date。getDay
 */
export function getWeek(date) {
  if (!(date instanceof Date)) return
  const w = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return w[date.getDay()]
}

export function dateFormat(date, fmt = 'yyyy-MM-dd mm:ss', IS_MS = 1) {
  date = IS_MS ? new Date(Number(date)) : new Date(Math.round(Number(date) * 1000))
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
    'w': getWeek(date) // 周几
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 *
 *
 * @export
 * @param {*} date1 Date
 * @param {*} date2 Date
 */
export function isTheSameDay(date1, date2) {
  const d1y = date1.getFullYear()
  const d1m = date1.getMonth() + 1
  const d1d = date1.getDay()
  const d2y = date2.getFullYear()
  const d2m = date2.getMonth() + 1
  const d2d = date2.getDay()
  return +new Date(`${d1y}/${d1m}/${d1d}`) === +new Date(`${d2y}/${d2m}/${d2d}`)
}

// 时间戳秒为单位转换为时间
export function dateFor(date, fmt = 'yyyy-MM-dd mm:ss') {
  date = new Date(Math.round(Number(date) * 1000))

  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
    'w': getWeek(date) // 周几
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
