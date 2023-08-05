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
}

const person = new Person();
person.printMyName();
person.printgender();
