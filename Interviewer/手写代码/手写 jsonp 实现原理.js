// jsonp原理：因为jsonp发送的并不是ajax请求，其实是动态创建script标签
// script标签是没有同源限制的，把script标签的src指向请求的服务端地址。
// https://juejin.cn/post/6844903946364928008

function jsonp(url, data = {}, callback = 'callback') {
    // 处理json对象，拼接url
    data.callback = callback;
    let params = [];
    for (let key in data) {
      params.push(key + '=' + data[key]);
    }
    // params: [ 'data=1', 'callback=callback' ]
    let script = document.body.createElement('script'); // 构造 script
    script.src = url + '?' + params.join('&');
    // script.src: http://127.0.0.1:3000?data=1&callback=callback
    document.body.appendChild(script);  // appendChild() 方法向节点的子节点列表的末尾添加新的子节点
    
    // 返回Promise
    return new Promise((resolve, reject) => {
      window[callback] = data => {
        try {
          resolve(data);
        } catch (e) {
          reject(e);
        } finally {
          script.parentNode.removeChild(script); // 注意这句代码，script移除,细节
        }
      }
    })
  }
  
  // 请求数据
  jsonp('http://127.0.0.1:3000', {
    data: 1,
  }, 'callback')
  .then(res => {
    console.log(res);
  })
