function jsonp({ url, params, callbackName }) {
//拼接url地址
    function getUrl() {
    let paramsStr = ''
    for (let item in params) {
        if (Object.prototype.hasOwnProperty.call(params, item)) {
        paramsStr += `${item}=${params[item]}&`
        }
    }
    return `${url}?${paramsStr}callback=${callbackName}`
    }

    return new Promise((resolve, reject) => {
    //创建一个script标签
    let scriptEle = document.createElement('script')
    //给script标签的src属性赋值。
    scriptEle.src = getUrl()
    //将其插入文档流中
    document.body.appendChild(scriptEle)
    //监听回调函数
    window[callbackName] = (data) => {
        resolve(data)
        document.body.removeChild(scriptEle)
    }
    })
}

// DEMO
jsonp({ url: 'http://127.0.0.1:3000', params: {}, callbackName: 'func' }).then(res => {
    console.log(res)
})
