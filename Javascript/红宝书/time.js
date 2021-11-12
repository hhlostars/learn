let date = new Date(1591783200000);

let Y = date.getFullYear() + '-';
let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
let D = date.getDate() + ' ';
let h = date.getHours() + ':';
let m = (date.getMinutes() == '0' ? date.getMinutes() + '0' : date.getMinutes() ) + ':';
let s = (date.getSeconds() == '0' ? date.getSeconds() + '0' : date.getSeconds() );
let str = Y + M + D + h + m + s
console.log(str);