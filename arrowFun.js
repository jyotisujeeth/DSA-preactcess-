// learning arrow function 

function prefixer(prefix ){
    this.prefix = prefix;
}

// prefixer.prototype.prefixerArray = function(arr) {
//    let that = this;
  /*
  let that = this
  undefined brad
undefined hello
undefined world
*/
    // return arr.map(function(x){
    //     console.log(that.prefix + ' ' + x);
    // });
 prefixer.prototype.prefixerArray = function(arr) {
//    let that = this;// not require in arrow functions
  

     return arr.map((x) => {
         console.log(this.prefix + ' ' + x);
     });
}

let pre= new prefixer('hello');
pre.prefixerArray(['brad', 'hello', 'world']);

// let add = function(a, b) {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

add(10,2);

// arrow functions

let add =(a,b) => {
    let sum = a+b;
console.log(sum);
 return false;
}
