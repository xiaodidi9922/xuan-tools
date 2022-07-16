
// 当前版本
export const version: string = require('../package.json').version;

// 防抖
export {default as debounce } from "./debounce"

// 节流
export {default as throttle} from "./throttle"

// 深克隆
export {default as deepClone} from "./deepClone"

// 类型判断
export {default as typeOf} from "./typeOf"

/** 
 *  数组操作
*/
// 删除尾部元素(改变原数组)
export {default as dropRight} from "./dropRight"