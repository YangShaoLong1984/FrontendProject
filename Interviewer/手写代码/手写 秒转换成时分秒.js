function getTime(time) {
    let h = parseInt(time / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    let m = parseInt(time / 60 % 60);
    m = m < 10 ? '0' + m : m;
    let s = parseInt(time % 60);
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}

console.log(getTime(3601)); // 一天86400s
console.log(getTime(86401));