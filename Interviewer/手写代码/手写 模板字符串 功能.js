// https://blog.csdn.net/qq_40028324/article/details/116492586



function strParse(str) {
    let args = /\$\{(.+?)\}/g;
    
    return str.replace(args, function() {
        return eval(arguments[1]); // eval() 函数会将传入的字符串当做 JavaScript 代码进行执行
    }) 
}

// 测试
let str1 = 'a', str2 = 'b';
let str = `第一个字母是${str1}，第二个字母是${str2}`;
let res = strParse(str);
console.log(res); 

// 原本功能
console.log(`第一个字母是${str1}，第二个字母是${str2}`);