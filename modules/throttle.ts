import { Throttle } from "../type/index";
/**
 * 节流
 * @param 回调函数
 * @param 时间
 */

 const throttle:Throttle = (fn,time)=>{
    let pre:number = 0
    return ()=>{
        let now:number = new Date().getTime() 
        if(now - pre > time){
            fn()
            pre = now
        }
    }
 }

export default throttle