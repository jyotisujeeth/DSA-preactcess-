/*
let myArray = [ 11,22,33, 44, 33, 11, 77];
let mySet = new Set(myArray);




mySet.add('100'); //{ 11, 22, 33, 44, 77, '100' }
mySet.add({a:1, b:2, c:3});//{ 11, 22, 33, 44, 77, '100', { a: 1, b: 2, c: 3 } }
mySet.delete(22);// { 11, 33, 44, 77, '100', { a: 1, b: 2, c: 3 } }

mySet.add('100');//considering string so already ther Set(6) { 11, 33, 44, 77, '100', { a: 1, b: 2, c: 3 } }
mySet.add(100);//considering number{ 11, 33, 44, 77, '100', { a: 1, b: 2, c: 3 }, 100 }


mySet.add('200');//considering number{ 11, 33, 44, 77, '100', { a: 1, b: 2, c: 3 }, 100, '200' }
console.log(mySet);
console.log(mySet.size);//8
*/


let myMap = new Map  ([['a1', 'hello'], ['a2', 'world']]);
myMap.set('c3', 'wait')
myMap.delete('a1');
console.log(myMap);

let carWeakSet = new WeakSet();

// let car1= {
//     make:'Honda',
//     model:'camry'
// }

// carWeakSet.add(car1);

// let car2= {
//     make:'Toyota',
//     model:'civic'
// }

// carWeakSet.add(car2);

// //carWeakSet.delete(car1);
// console.log(carWeakSet);

let carWeakMap = new WeakMap();

let key1 ={
    id:1
}

let car1= {
    make:'Honda',
    model:'camry'
}


let car2= {
    make:'Toyota',
    model:'civic'
}

carWeekMap.set(key1, car1);
carWeekMap.set(key2, car2);

//carWeakSet.delete(car1);


carWeakSet.delete(key1);

console.log(carWeakSet);
