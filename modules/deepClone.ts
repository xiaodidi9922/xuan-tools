import { DeepClone } from "../type/index";
/**
 * 深克隆
 * @param {object} 克隆对象
 * @return {object} 克隆体 
 */

const deepClone:DeepClone = (obj,map=new Map)=>{
  // 如果不是对象 或者是时间对象  直接返回
  if(typeof obj !== 'object' || obj instanceof Date){
    return obj
  }
  // 如果已经存在，直接返回，防止循环引用
  if(map.get(obj)){
    return map.get(obj)
  }
  let res = {}
  if(obj instanceof Array){
    res = []
  }

  map.set(obj,res)
  for(const key in obj){
    if(obj.hasOwnProperty(key)){
      res[key] = deepClone(obj[key],map)
    }
  }
  return res
}

export default deepClone