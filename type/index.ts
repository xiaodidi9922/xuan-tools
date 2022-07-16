// 防抖
export type Debounce = (
fn:()=>void,
time:number
)=>()=>void

// 节流
export type Throttle = (fn:()=>void,time:number)=>()=>void

// 深克隆
export type DeepClone = (obj:any,map?:Map<any,any>)=>any

// 类型判断
export type TypeOf = (target:any)=>any

/** 
 *  数组操作
*/
// 删除尾部元素(改变原数组)
export type DropRight = (array:any[],n:number)=>number

