import {throttle} from '../modules/index'

test("throttle",function(done){
  let num = 0
  const add = ()=>{
    num += 1
  }
  const TestThrottle = throttle(add,1000)
  TestThrottle()
  TestThrottle()
  TestThrottle()

  setTimeout(() => {
    expect(num).toBe(1)
    done()
  }, 3000);
})