const arrayNumbers = [45,65,32,12,2,8,9]
const arrayStrings = ['segunda','terça','quarta','quinta']
const arrayMisto = [45,'segunda',true]

console.log('arrayNumbers',arrayNumbers.length)
console.log('arrayStrings',arrayStrings.length)
console.log('arrayMisto',arrayMisto.length)
console.log('imprima',arrayNumbers[0],arrayStrings[1],arrayMisto[2])
console.log('inclusão 1',arrayNumbers.includes(45))
console.log('inclusão 2',arrayMisto.includes(32))
