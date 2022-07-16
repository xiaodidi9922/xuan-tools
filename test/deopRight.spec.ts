import {dropRight} from '../modules/index'

test("typeOf",function(done){
  let arr = [1,2,3,5,6]
  dropRight(arr,2)

  expect(arr.length).toBe(3)
  done()
})