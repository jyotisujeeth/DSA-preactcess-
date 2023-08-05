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
person.printgender();
