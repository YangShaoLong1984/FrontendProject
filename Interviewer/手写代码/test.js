// 实现jsonp
function jsonp(url, data, cb) {
    data.cb = cb;
    let params = [];
    for (let key in data) {
        params.push(key + "=" + data[key]);
    }
    let script = document.createElement("script");
    script.src = url + "?" + params.join("&");
    document.body.appendChild(script);

    return new Promise((resolve, reject) => {
        try {
            window[cb] = data => {
                resolve(cb);
            }
        } catch (e) {
            reject(e);
        } finally {
            script.parentNode.removeChild(script);
        }
    })
}


jsonp('http://1.1.1.1:300', {
    data: 1,
}, 'callback').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})