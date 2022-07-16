'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param time 防抖时间
 * @return 防抖函数
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
 * 节流
 * @param 回调函数
 * @param 时间
 */
var throttle = function (fn, time) {
    var pre = 0;
    return function () {
        var now = new Date().getTime();
        if (now - pre > time) {
            fn();
            pre = now;
        }
    };
};

/**
 * 深克隆
 * @param {object} 克隆对象
 * @return {object} 克隆体
 */
var deepClone = function (obj, map) {
    if (map === void 0) { map = new Map; }
    // 如果不是对象 或者是时间对象  直接返回
    if (typeof obj !== 'object' || obj instanceof Date) {
        return obj;
    }
    // 如果已经存在，直接返回，防止循环引用
    if (map.get(obj)) {
        return map.get(obj);
    }
    var res = {};
    if (obj instanceof Array) {
        res = [];
    }
    map.set(obj, res);
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key], map);
        }
    }
    return res;
};

/**
 * 类型判断
 * @param 判断对象
 * @return 类型
 */
var typeOf = function (target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
};

/**
 * 数组
 * 切除 数组 尾部的 n 个元素(改变原数组)
 * @param {array} 目标数组
 * @param {number} 去除元素个数
 * @return {number} 剩余元素
 */
var dropRight = function (array, n) {
    var len = array.length - n;
    return array.length = len;
};

// 当前版本
var version = require('../package.json').version;

exports.debounce = debounce;
exports.deepClone = deepClone;
exports.dropRight = dropRight;
exports.throttle = throttle;
exports.typeOf = typeOf;
exports.version = version;
