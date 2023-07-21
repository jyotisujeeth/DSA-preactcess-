/*
function test (){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a);
   
}
test();


function testlet() {
    let a=30;
 
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}
testlet();



// for (var i=0; i<10; i++) {
//     console.log(i);
// }
// //console.log(i);

for (let  i=0; i<10; i++) {
    console.log(i);
}
console.log(i);// i is not defined
*/

const colors =[];

colors.push('red');

colors.push('blue');

colors='GREEN';//TypeError: Assignment to constant variable.   
console.log(colors);

