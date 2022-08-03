// jsonp 实现
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
    window[cb] = data => {
      try {
        resolve(data);
      } catch (e) {
        reject(e);
      } finally {
        script.parentNode.removeChild(script);
      }
    }
  })
}


jsonp('http://1.1.1.1:3000', {
  data: 1,
},'callback').then(data => {
  console.log(data);
}).catch(r => {
  console.log(r);
})