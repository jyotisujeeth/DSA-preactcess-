//alert("i am conected")
"use strict";
let name = "jyoti";

function makeUpercase(word){
    return word.toUpperCase();
}

let template = `<h1>${makeUpercase('hello')}, ${name}</h1>
<p> this learing templte concept in javascript</p>`;

document.getElementById('intro').innerHTML = template;
//document.getElementById(intro).innerHTML = template;
