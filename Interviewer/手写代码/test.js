let s = "We are happy."
let arr = s.split('');
console.log(arr);
for (let a of arr) {
    // console.log(a);
    if (a === ' ') {
        a = '2'
    }
}
console.log(arr);