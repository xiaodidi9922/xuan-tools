import { TypeOf } from '../type/index'
/**
 * 类型判断
 * @param 判断对象
 * @return 类型
 */

const typeOf:TypeOf = (target)=>{
  return Object.prototype.toString.call(target).slice(8,-1).toLowerCase()
}

export default typeOf