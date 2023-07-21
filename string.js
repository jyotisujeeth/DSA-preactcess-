let theString ="hello, my name is jyotisujeeth and i kike to lear javascript";

// startWith();
// endsWith()
// includes();

console.log(theString.startsWith('helle'));// false
console.log(theString.startsWith('hello'));// true

console.log(theString.endsWith('helle'));// false
console.log(theString.endsWith('javascript'));// true


console.log(theString.includes('jyoti'));// true

console.log(theString.includes('green'));// true


//hexa 
console.log(0xff);//255

//binary
console.log(0b101101101101101101101);//1497965

// octal
console.log(0o456);//302

console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(65));//true

console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(65));//false

console.log(Number.isInteger(Infinity));//false
console.log(Number.isInteger(543));//true
