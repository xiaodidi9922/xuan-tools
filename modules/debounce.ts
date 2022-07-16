import { Debounce } from '../type/index'
/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param time 防抖时间
 * @return 防抖函数
 */
const debounce: Debounce = (fn, time) => {
	var timer
	return () => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn()
		}, time)
	}
}

export default debounce
