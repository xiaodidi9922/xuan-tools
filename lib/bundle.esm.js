/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param time 防抖时间
 *
 */
var debounce = function (fn, time) {
    var timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn();
        }, time);
    };
};

/**
 * 当前函数库版本
 */
console.log(111);
console.log(require('../package.json').version);
var version = "1.0.0";

export { debounce, version };
