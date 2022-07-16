import {deepClone} from '../modules/index'

test("deepClone",function(done){
  let obj = {a:1,b:{c:12}}
  let obj1 = deepClone(obj)
  obj1.a = 2
  expect(obj.a).toBe(1)
  done()
})