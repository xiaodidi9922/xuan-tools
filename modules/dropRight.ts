import { DropRight } from '../type/index'
/**
 * 数组
 * 切除 数组 尾部的 n 个元素(改变原数组)
 * @param {array} 目标数组
 * @param {number} 去除元素个数
 * @return {number} 剩余元素
 */

const dropRight:DropRight= (array,n)=>{
  let len  = array.length - n
  return array.length = len
}

export default dropRight