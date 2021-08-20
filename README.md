# JavaScript Essential
1. [Node.js](#nodejs)
    1. [install nvm-windows](#install-nvm-windows)
    1. [install node.js](#install-nodejs)
    1. [install npm](#install-npm)
    1. [개발 서버 실행과 빌드](#개발-서버-실행과-빌드)
    1. [유의적 버전 SemVer](#유의적-버전-SemVer)
    1. [.gitignore](#gitignore)
1. [JS 시작하기](#js-시작하기)
    1. [ECMAScript](#ecmascript)
    1. [데이터 타입 확인](#데이터-타입-확인)
    1. [산술, 할당 연산자](#산술-할당-연산자)
    1. [비교, 논리 연산자](#비교-논리-연산자)
    1. [삼항 연산자](#삼항-연산자)
    1. [조건문 if else](#조건문-if-else)
    1. [조건문 switch](#조건문-switch)
    1. [반복문 for](#반복문-for)
    1. [변수 유효범위](#변수-유효범위)
    1. [형 변환](#형-변환)
1. [JS 함수](#js-함수)
    1. [함수 복습](#함수-복습)
    1. [화살표 함수](#화살표-함수)
    1. [즉시실행함수 IIFE](#즉시실행함수-iife)
    1. [호이스팅](#호이스팅)
    1. [타이머 함수](#타이머-함수)
    1. [콜백](#콜백)
1. [JS 클래스](#js-클래스)
    1. [생성자 함수 prototype](#생성자-함수-prototype)
    1. [this](#this)
    1. [ES6 Classes](#es6-classes)
    1. [상속/확장](#상속확장)

# JavaScript Level up
1. [JS 데이터](#js-데이터)
    1. [문자](#문자)
    1. [숫자와 수학](#숫자와-수학)
    1. [배열](#배열)
    1. [객체](#객체)
    1. [구조 분해 할당](#구조-분해-할당)
    1. [전개 연산자](#전개-연산자)
    1. [불변성](#불변성)
    1. [얕은 복사와 깊은 복사](#얕은-복사와-깊은-복사)
1. [JS 데이터 실습](#js-데이터-실습)
    1. [가져오기, 내보내기](#가져오기-내보내기)
    1. [Lodash 사용법](#lodash-사용법)
    1. [JSON](#json)
    1. [Storage](#storage)
    1. [OMDb API](#omdb-api)
    1. [DOM API](#dom-api)
    1. [메소드 체이닝](#메소드-체이닝)
1. [정규표현식](#정규표현식)
    1. [역할](#역할)
    1. [테스트 사이트](#테스트-사이트)
    1. [정규식 생성](#정규식-생성)
    1. [메소드](#메소드)
    1. [플래그/옵션](#플래그옵션)
    1. [패턴/표현](#패턴표현)

# JavaScript Essential

# Node.js
## install nvm-windows
구글에 [nvm-windows](https://github.com/coreybutler/nvm-windows) 검색  
Node Version Manager (nvm) for Windows - [Download Now](https://github.com/coreybutler/nvm-windows/releases) 선택  
`nvm-setup.zip` 을 다운받아 설치
```bash
$ nvm --version
```

## install node.js
```bash
$ nvm ls
$ nvm install 12.14.1
$ nvm install 12.21.0
$ nvm use 12.14.1
$ node --version
$ nvm install 14.16.0
$ nvm uninstall 12.21.0
$ nvm --help
```

## install npm
```bash
$ npm init -y
$ npm install parcel-bundler -D
$ npm install lodash
$ npm install
$ npm i
$ npm --version
```

## 개발 서버 실행과 빌드
`package.json`  
```json
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
```
~~"main": "index.js",~~  
```bash
$ npm run dev
$ npm run build
```

## 유의적 버전 SemVer
Magor.Minor.Patch  
`package.json`  
```json
"dependencies": {
    "lodash": "4.17.20"
  }
```
```bash
$ npm info lodash
$ npm install lodash@4.17.20
$ npm update lodash
```

## .gitignore
`.gitignore`
```plaintext
node_modules/
dist/
.cache/
```

# JS 시작하기
## ECMAScript
javascript 표준

## 데이터 타입 확인
`main.js`
```js
import getType from './getType'

console.log(typeof 'Hello world!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

console.log(getType('Hello world!'))
console.log(getType(123))
console.log(getType(true))
console.log(getType(undefined))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))
```
`getType.js`
```js
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
```

## 산술, 할당 연산자
```js
console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

const a = 2
let b = 2
// b = b + 1
b += 1

console.log(b)
```

## 비교, 논리 연산자
```js
const a = 1
const b = 1

console.log(a === b)

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(a !== b)

console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)

const c = 1 === 1
const d = 'AB' === 'ABC'
const e = true

console.log(c)
console.log(d)
console.log(e)

console.log('&&: ', c && d && e)
console.log('&&: ', c && d)
console.log('||: ', c || d || e)
console.log('||: ', c || d)
console.log('!: ', !c)
```

## 삼항 연산자
```js
const a = 1 < 2

if(a) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(a ? '참' : '거짓')
```
## 조건문 if else
`getRandom.js`
```js
export default function random() {
  return Math.floor(Math.random() * 10)
}
```
`main.js`
```js
import random from './getRandom'

const a = random()

if(a === 0) {
  console.log('a is 0')
} else if (a === 2) {
  console.log('a is 2')
} else if (a === 4) {
  console.log('a is 4')
} else {
  console.log('rest...')
}
```

## 조건문 switch
`getRandom.js`
```js
export default function random() {
  return Math.floor(Math.random() * 10)
}
```
`main.js`
```js
import random from './getRandom'

const a = random()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
} 
```

## 반복문 for
`main.js`
```js
const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}
```
`index.html`
```html
<head>
  <script defer src='./main.js'></script>
</head>
<body>
  <ul></ul>
</body>
```

## 변수 유효범위
let, const = 블록 레벨 유효범위  
```js
function scope() {
  if(true) {
    console.log(a)
    const a = 123
  }
  console.log(a)
}
scope()
```
---
var = 함수 레벨 유효범위  
```js
function scope() {
  console.log(a)
  if(true) {
    var a = 123
  }
}
scope()
```

## 형 변환
- Truthy : true, {}, [], 1, 2, 'false', -12, '3.14' ...  
- Falsy : false, '', null, undefined, 0, -0, NaN
```js
const a = 1
const b = '1'

console.log(a === b)
console.log(a == b)

if({}) {
  console.log(1 + undefined)
}
```

# JS 함수
## 함수 복습
함수 호출 횟수 주의
```js
function sum(x, y) {
  if(x < 2) {
    return
  }
  return x + y
  console.log(x)
}

function sum2() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

const minus = (x, y) => x - y

const a = sum(7, 3)
const b = sum2(4, 12)

console.log(minus(1, 3))
console.log(a)
console.log(b)
console.log(a + b)
```

## 화살표 함수
```js
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2
const doubleArrow2 = x => {
  return x * 2
}
const doubleArrow3 = x => ({
  name: 'Heropy'
})
console.log('double: ', doubleArrow(7))
```

## 즉시실행함수 IIFE
즉시실행함수 사용 시 세미콜론 준수
```js
const a = 7
function double() {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
}());
```

## 호이스팅
함수 선언부가 유효번위 최상단으로 끌어올려지는 현상
```js
const a = 7

double()
double2()

const double = function () {
  console.log(a * 2)
}

function double2() {
  console.log(a * 2)
}
```

## 타이머 함수
`mian.js`
```js
const timer = setTimeout(() => {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const timer2 = setInterval(() => {
  console.log('Heropy!')
}, 3000)

const h2El = document.querySelector('h2')
h2El.addEventListener('click', () => {
  clearInterval(timer2)
})
```
`index.html`
```html
<head>
  <script defer src='./main.js'></script>
</head>
<body>
  <h1>Hello world!</h1>
  <h2>Hello world!</h2>
</body>
```

## 콜백
함수의 인수로 사용되는 함수, 실행 위치를 보장
```js
function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})
```

# JS 클래스
## 생성자 함수 prototype
```js
const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy)

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName())
```
```js
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
```

## this
- 일반함수 : 호출 위치에 따라 this 정의
- 화살표 함수 : 자신이 선언된 함수 범위에서 this 정의
```js
const heropy = {
  name: 'heropy',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()

const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
}
amy.normal()
amy.arrow()
```
```js
function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const heropy = new User('Heropy')

heropy.normal()
heropy.arrow()
```
```js
const timer = {
  name: 'Heropy!!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()
```

## ES6 Classes
```js
const heropy = {
  name: 'heropy',
  normal() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()
```

```js
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())
```

```js
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())
```
## 상속/확장
```js
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)
```

# JavaScript Level up

# JS 데이터
## 문자
[String mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 참조
```js
const str = 'Hello world!'
const email = 'thesecon@gmail.com'
const space = '       Hello world   '

console.log(str.indexOf('world'))
console.log('Hello world!'.indexOf('world'))
console.log(str.indexOf('world') !== -1)
console.log(str.length)
console.log('0123'.length)
console.log(str.slice(0, 3))
console.log(str.replace('world', 'HEROPY'))
console.log(str.replace(' world', ''))
console.log(email.match(/.+(?=@)/)[0])
console.log(space.trim())
```

## 숫자와 수학
[Math mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math) 참조
```js
const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('abs: ', Math.abs(-12))
console.log('min: ', Math.min(2, 8))
console.log('max: ', Math.max(2, 8))
console.log('ceil: ', Math.ceil(3.14))
console.log('floor: ', Math.floor(3.14))
console.log('round: ', Math.round(3.5))
console.log('random: ', Math.random())
```

## 배열
[Array mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array) 참조
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(fruits[2])

console.log(numbers.length)
console.log(fruits.length)
console.log([1, 2].length)
console.log([].length)

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)
```
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

fruits.forEach(function (fruit, i, array) {
  console.log(fruit, i, array)
})

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log('a: ', a)

const b = fruits.map(function (fruit, index) {
  return {
    id: index,
    name: fruit
  }
})
console.log('b: ', b)



const a2 = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
})
const b2 = fruits.map((fruit, index) => ({ 
  id: index, 
  name: fruit 
}))
```
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => {
  return number < 3
})
console.log(a)

const b = numbers.filter(number => {
  return number < 3
})
console.log(b)

console.log(numbers)

const c = fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(c)

const d = fruits.findIndex(fruit => {
  return /^C/.test(fruit)
})
console.log(d)

const e = numbers.includes(3)
console.log(e)

const f = fruits.includes('HEROPY')
console.log(f)


const a2 = numbers.map(number => number < 3)

const b2 = numbers.filter(number => number < 3)
const c2 = fruits.find(fruit => /^B/.test(fruit))
const d2 = fruits.findIndex(fruit => /^C/.test(fruit))
```
.push(), .unshift(), .reverse(), .splice(), 원본 수정됨 주의
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

numbers.splice(2, 1)
numbers.splice(2, 0, 999)
numbers.splice(2, 1, 99)

console.log(numbers)

fruits.splice(2, 0, 'Orange')

console.log(fruits)
```

## 객체
[Object mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object) 참조  
정적 메소드, 프로토 타입 메소드
```js
const userAge = {
  // key: value
  name: 'Heropy',
  age: 85
}
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b)

const target2 = Object.assign({}, userAge, userEmail)
console.log(target2)
console.log(userAge)
console.log(target === userAge)

const target3 = Object.assign({}, userAge)
console.log(target2)
console.log(userAge)
console.log(target === userAge)
```
```js
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)
```

## 구조 분해 할당
```js
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}
const { name: heropy, age , address = 'Korea' } = user
// const heropy = name

console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`${heropy}의 나이는 ${age}세입니다.`)
console.log(`${heropy}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)

const [, ,e] = fruits
console.log(e)
```

## 전개 연산자
```js
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits)

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(fruits[0], fruits[1], fruits[2]))
console.log(toObject(...fruits))



function toObject2(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
function toObject3(a, b, ...c) {
  return { a, b, c }
}
const toObject4 = (a, b, ...c) => ({ a, b, c })

```

## 불변성
원시 데이터 : String, Number, Boolean, undefined, null
참조형 데이터 : Object, Array, Function
```js
// --------------------------------
// |1:  1  |2:  4  |3:  7  |4:      
// --------------------------------
let a = 1
let b = 4
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)
```
```js
// -------------------------------------------
// |1: { k: 9 } |2: { k: 1 } |3:     |4:      
// -------------------------------------------
let a = { k: 1 }
let b = { k: 1 }
console.log(a, b, a === b)
a.k = 7
b = a
console.log(a, b, a === b)
a.k = 2
console.log(a, b, a === b)
let c = b
console.log(a, b, c, a === c)
a.k = 9
console.log(a, b, c, a === c)
```

## 얕은 복사와 깊은 복사
[lodash docs](https://lodash.com/docs/4.17.15) 참조
```js
const user = {
  name : 'Heropy',
  age : 85,
  emails : ['thesecon@gmail.com']
}
// const copyUser = user
// const copyUser = Object.assign({}, user)
const copyUser = {...user}
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
```
```js
import _ from 'lodash'

const user = {
  name : 'Heropy',
  age : 85,
  emails : ['thesecon@gmail.com']
}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
```

# JS 데이터 실습
## 가져오기, 내보내기
`main.js`
```js
import _ from 'lodash' // From `node_modules`!
import checkType from './getType' // getType.js
// import { random, user as heropy } from './getRandom' //getRandom.js
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
// console.log(random(), random())
// console.log(heropy)
console.log(R)
console.log(R.default)
console.log(R.random)
console.log(R.user)
```
`getType.js`
```js
export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
```
`getRandom.js`
```js
export function random() {
  return Math.floor(Math.random() * 10)
}
export const user = {
  name: 'HEROPY',
  age: 85
}
export default 123
```

## Lodash 사용법
[lodash docs](https://lodash.com/docs/4.17.15) 참조
```js
import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' }
]
const usersB = [
  { userId: '1', name: 'HEROPY' },
  { userId: '3', name: 'Amy' }
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
```
```js
import _ from 'lodash'

const users = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'HEROPY' })
console.log(users)
```

## JSON
기본자료형 : Number, String, Boolean, Array, Object, null  
`main.js`
```js
import myData from './myData.json'

console.log(myData)

const user = {
  name : 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ],
  'company-name!#$%^': {}
}
console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
```
`myData.json`
```json
{
  "string": "HEROPY",
  "number": 123,
  "boolean": true,
  "null": null,
  "object": {},
  "array": []
}
```

## Storage
[local storage mdn](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage) 참조
Appliciation - Storage - Local Storage, sessionStorage
```js
const user = {
  name : 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

localStorage.setItem('user', JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')))
localStorage.removeItem('user')
```
```js
const user = {
  name : 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

localStorage.setItem('user', JSON.stringify(user))
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))
```
[lowdb](https://github.com/typicode/lowdb) - 웹 브라우저에서 사용하는 JSON 기반 database 

## OMDb API
[omdb api](https://www.omdbapi.com/) 참조
[axios](https://github.com/axios/axios)
```bash
$ npm install axios
$ npm audit fix
```
`main.js`
```js
import axios from 'axios'

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()
```
`index.html`
```html
<head>
  <script defer src="./main.js"></script>
</head>
<body>
  <h1></h1>
  <img src="" alt="" width="200">
</body>
```

## DOM API
`main.js`
```js
let boxEl = document.querySelector('.box')

console.log(boxEl)

boxEl.addEventListener('click', function () {
  console.log('Click!!')
  boxEl.classList.add('active')
  console.log(
    boxEl.classList.contains('active')
  )
  boxEl.classList.remove('active')
  console.log(
    boxEl.classList.contains('active')
  )
})

console.log(boxEl.textContent)

boxEl.textContent = 'HEROPY!!'
console.log(boxEl.textContent)
```
```js
const boxEls = document.querySelectorAll('.box')
console.log(boxEls)

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`)
  console.log(index, boxEl)
})
```
`index.html`
```html
<head>
  <script defer src="./main.js"></script>
</head>
<body>
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
</body>
```
## 메소드 체이닝
[String mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split), [Array mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 참조
```js
const a = 'Hello~'

const b = a.split('').reverse().join('');

console.log(a)
console.log(b)
```

# 정규표현식
정규식, Regular Expression

## 역할
- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트
https://regexr.com/

## 정규식 생성
```js
// 생성자
new RegExp('표현','옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```

## 메소드
메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체

## 플래그/옵션
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

## 패턴/표현
패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)

```js
let str = `
010-1234-5678.
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
hxyp
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
d`

const h = `  the hello  world   !

`

str = str.replace(/jumps/g, 'AAA')
console.log(/the/gi.test(str))
console.log(str.replace('/fox/g', 'AAA'))
console.log(str)
console.log(str.match(/the/))
console.log(str.match(/the/g))
console.log(str.match(/the/gi))
console.log(str.match(/\./gi))
console.log(str.match(/\.$/gi))
console.log(str.match(/\.$/gim))
console.log(str.match(/d$/gm))
console.log(str.match(/^t/gm))
console.log(str.match(/^T/gm))
console.log(str.match(/^t/gim))
console.log(str.match(/./g))
console.log(str.match(/http/g))
console.log(str.match(/h..p/g))
console.log(str.match(/fox/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/https?/g))
console.log(str.match(/d/))
console.log(str.match(/d{2}/))
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\w{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g))
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g))
console.log(str.match(/\d/g))
console.log(str.match(/\d{1,}/g))
console.log(h.match(/\s/g))
console.log(h.replace(/\s/g, ''))
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
```


