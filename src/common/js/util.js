/* eslint-disable */
function assginObj(Obj1, Obj2) {
    // 从obj2中找值  填写到obj1中  并不是覆盖 只是填充
    const copyObj = JSON.parse(JSON.stringify(Obj1))
    for (const key in copyObj) {
        if (Obj2[key] != null) {
            copyObj[key] = Obj2[key]
        }
    }
    return copyObj
}

function dateFtt(fmt, date) {
    // fmt 格式化时间格式 yyyy-MM-dd hh:mm:ss
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    }
    return fmt
}

function setCause(type) {
    switch (type + '') {
        case '1':
            return '会议'
        case '2':
            return '面试'
        case '3':
            return '其他'
    }
}
// 将url和data拼接
function joinUrl(url, data) {
    let num = 0
    for (let item in data) {
        if (item.indexOf("time") == -1) {
            url = url + (num == 0 ? "?" : "&") + item + '=' + data[item]
            num++
        }
    }
    return url
}
// vux 验证form
// 元素必须有 ref='valid-xxxx' 同时提示消息放在了 valid-title中
function validForm(that) {
    if (Object.keys(that.$refs).length > 0) {
        for (const item in that.$refs) {
            if (/^valid-/.test(item)) {
                if (!that.$refs[item].valid) {
                    let info = that.$refs[item]['$attrs'] ? that.$refs[item]['$attrs']['valid-title'] : that.$refs[item].getAttribute('valid-title');
                    that.$vux.toast.text(info, 'middle')
                    return false
                }
            }
        }
        return true
    }
}
// base64 转blob或者file
function dataURLtoFile(dataurl, filename, type) {
    var arr = dataurl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    if (type) {
        //转换成成blob对象
        return new Blob([u8arr], { type: mime });
    } else {
        //转换成file对象
        return new File([u8arr], filename, { type: mime });
    }
}

function verificationBtn(element) {
    // 验证码间隔时间
    var num = 60
    var timer = setInterval(function() {
        num--
        element.innerHTML = num + '秒后重试'
        element.style.color = ' #ccc'
        element.disabled = ' disabled'
        if (num === 0) {
            element.disabled = ''
            element.style.color = '#000000'
            element.innerHTML = '获取验证码'
            clearInterval(timer)
        }
    }, 1000)
}

function canvasDataURL(path, obj, callback) {
    var img = new Image()
    img.src = path
    img.onload = function() {
        var that = this
        // 默认按比例压缩
        var w = that.width
        var h = that.height
        var scale = w / h
        w = obj.width || w
        h = obj.height || (w / scale)
        var quality = 0.7 // 默认图片质量为0.7
        // 生成canvas
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        // 创建属性节点
        var anw = document.createAttribute('width')
        anw.nodeValue = w
        var anh = document.createAttribute('height')
        anh.nodeValue = h
        canvas.setAttributeNode(anw)
        canvas.setAttributeNode(anh)
        ctx.drawImage(that, 0, 0, w, h)
        // 图像质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality)
        // 回调函数返回base64的值
        var arr = base64.split(',')
        var mime = arr[0].match(/:(.*?);/)[1]
        var bstr = atob(arr[1])
        var n = bstr.length
        var u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        console.log(new Blob([u8arr], { type: mime }))
        callback(new Blob([u8arr], { type: mime }))
    }
}

function validInfo(path) {
    let _path = path || window.location.href
    // 无需验证token页面列表
    const noTokenList = [
        '/addTemporaryUser', // 临时访客填写
        '/loginIndex', // 主页
        '/login', // 登录
        '/visitorDetail', // 访客详情  访客接受邀请时使用
        '/forgetPwd', // 忘记密码
        '/outMap', // 地图
        '/addUserInfo' // 访客填写页面
    ]
    for (const item of noTokenList) {
        if (_path.indexOf(item) > -1) {
            return false
        }
    }
    return true
}

function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}
// 为指定的dom元素添加样式
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += ' ' + cls
}
// 删除指定dom元素的样式
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
        ele.className = ele.className.replace(reg, ' ')
    }
}
// jq parents方法
function getParents(el, parentSelector) {
    // If no parentSelector defined will bubble up all the way to *document*
    console.log("jinru")
    if (parentSelector === undefined) {
        parentSelector = document;
    }
    var parents = [];
    var p = el.parentNode;
    console.log(p)

    while (p !== parentSelector) {

        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    console.log(parentSelector)

    parents.push(parentSelector); // Push that parentSelector you wanted to stop at
    return parents;
}
export { removeClass, hasClass, addClass, validInfo, canvasDataURL, verificationBtn, dataURLtoFile, assginObj, dateFtt, setCause, joinUrl, validForm, getParents }