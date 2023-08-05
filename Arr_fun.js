// arrow function

class Human{
    
        gender = 'human';
    
    printgender=() => {
        console.log(this.gender);
}
}


class Person extends Human{
   // constructor () { 
    //    super();
        name ="John";
gender = 'book';

printMyName() {
    console.log(this.name);
}

    // diffencess between => normal fun
    var obj = {
  age: "25",

  findageArrowFn: () => {
    console.log(this.age);
  },

  findAgeNormalFn: function () {
    console.log(this.age);
  },
};

obj.findageArrowFn();

obj.findAgeNormalFn();

    /* undefined

25

because the arrow function is not block-scoped this refers to the global object instead of the obj
The main difference between the normal function and the fat arrow function is that the ‘this’ keyword behaves
differently in both. In a normal function, the ‘this’ keyword refers to the object that the function is a method of, or the global object if the function is not a method of any object. However, in an arrow function, ‘this’ is lexically bound to the surrounding context,
which means that it retains the value of ‘this’ from its enclosing function or scope

*/
    



    
}

const person = new Person();
person.printMyName();

// const num=1;
// const num2 = num;

// console.log(num2);

// const person ={
//     name: 'John'
// }
// const secondPerson ={
//     ...person
// };
// person.name = 'Johndobe';
// console.log(secondPerson);

// normal fun
// function printMyName(name) {
//     console.log(name);
// }
// printMyName('jyoti');

// arrow function 
// const printMyName= (name) =>{
//   console.log(name);}

//    printMyName('jyoti');

// const printMyName =(name, age) =>{
//   console.log(name, age);}

//   printMyName('jyoti', 100);


const mul= (num) =>  num*2;

console.log(mul(2));


// const myName = "dindogdig";
// console.log(myName);

// myName= "sujeeth"
// console.log(myName);

// destructuring for array 

// const numbers =[1, 2, 3, 4];
// //[num1, , , num4]= numbers;
// [num1, num2, num3, num4] = numbers;
// console.log( num1, num4);

// spread and rest operators 

// rest operator is used to marge a list of function arguments into an array

// const numbers= [1, 2, 3, 4];
// const newnum =[...numbers, 2,2,4,5];
// console.log(newnum);

// for object 

// const person ={
//     name: 'John'
// };

// const newperson = {
//     ...person,
//     age: 28
// }

// console.log(newperson);

// rest operatoress

const fillter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(fillter(1, 2, 3, 1, 5));// use for function argument
person.printgender();
