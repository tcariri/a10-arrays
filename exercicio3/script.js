const arrayOriginal1 = [2,4,6,8,10]
const arrayOriginal2 = [3,6,9,12,15]
const arrayOriginal3 = [4,8,12,16,20]

const copia1 = arrayOriginal1.slice()
copia1.push(12)
const copia2 = arrayOriginal2.slice()
copia2.pop()
const copia3 = arrayOriginal3.slice()
copia3.splice(2,1)

console.log('original 1',arrayOriginal1)
console.log('copia 1',copia1)
console.log('original 2',arrayOriginal2)
console.log('copia 2',copia2)
console.log('original 3',arrayOriginal3)
console.log('copia',copia3)
