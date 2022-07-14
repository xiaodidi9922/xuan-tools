import { debounce } from "../modules/index";

test('防抖',function(done){
    let num = 0
    const add = ()=>{num += 1}
    const testDebounce = debounce(add,1000)
    testDebounce()
    testDebounce()
    testDebounce()
    expect(num).toBe(0)

    setTimeout(() => {
        expect(num).toBe(1)
        done()
    }, 1500);
})