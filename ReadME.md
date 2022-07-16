# xuan-tools 工具库

## 前言
封装一些常用函数

## 快速开始

### 安装
``` shell
// npm 
npm install xuan-tools

// yarn
yarn add xuan-tools

```

### 使用
``` js
// 以 debounce 函数举个例子
// AMD
const { debounce } = require('xuan-tools')

// ES
import { debounce } from 'xuan-tools'
```

#### 通用

##### 防抖
```js
debounce(fn,time)
```
防抖函数
###### 参数
1、fn(function):回调函数
2、time(number):延时时间
###### 返回值
(function):新的防抖函数
###### 例子
```js
const fn = ()=>{console.log('防抖')}
const testDebounce = debounce(fn,1000)
testDebounce()
```
<br/>

##### 节流
```js
throttle(fn,time)
```
节流函数
###### 参数
1、fn(function):回调函数
2、time(number):延时时间
###### 返回值
(function):新的节流函数
###### 例子
```js
const fn = ()=>{console.log('节流')}
const TestThrottle = throttle(fn,1000)
TestThrottle()
```
<br/>

##### 类型检测
```js
typeOf(target)
```
传入参数，返回参数类型
###### 参数
1、target(any):待检测类型参数
###### 返回值
(string):传入的参数类型
###### 例子
```js
typeOf([])   // array
```

<br/>

##### 深克隆
```js
deepClone(target)
```
传入参数，返回克隆体
###### 参数
1、target(any):待克隆对象
###### 返回值
(any):克隆体
###### 例子
```js
let obj = {a:1,b:{c:12}}
deepClone(obj)   // {a:1,b:{c:12}}
```


#### 数组

##### 去除数组尾部元素（改变原数组）
```js
dropRight(array,n)
```
去除传入 `array` 尾部的 `n` 个元素
###### 参数
1、array(array):目标数组
2、n(number):要去除的元素个数
###### 返回值
(number):剩余的元素个数
###### 例子
```js
let arr = [1,2,3,5,6]
dropRight(arr,2)   // 3
arr  // [1,2,3]
```

## 开发

``` shell
// 安装依赖
npm install

// 打包
npm run build

// 生成文档
npm run doc

// 测试
npm run test

// 发布
npm login
npm publish
```

## 文件结构
- docs               生成文档
- tset               测试文件
- modules            函数方法
- type               类型定义
- jest.config.js     jest配置
- rollup.config.js  打包配置
- tsconfig.json      ts配置
- typedoc.josn       生成文档配置 


## 版本更新
- 1.0.1: 添加debounce函数
- 1.0.2: 添加npm忽略文件