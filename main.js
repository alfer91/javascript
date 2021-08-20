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