import {typeOf} from '../modules/index'

test("typeOf",function(done){
  let arr = []
  let obj = {}
  let num = 12
  
  let arrType = typeOf(arr)
  let objType = typeOf(obj)
  let numType = typeOf(num)
  
  expect(arrType).toBe("array")
  expect(objType).toBe("object")
  expect(numType).toBe("number")
  done()
})

