// 防抖
export type Debounce = (
fn:()=>void,
time:number
)=>()=>void