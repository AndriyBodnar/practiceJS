'use strict';
const btn = document.querySelector('.btn');
let timerid, 
i= 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300){
            clearInterval(id);
        } else{
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }

    }
}

btn.addEventListener('click', myAnimation);

//getter
const now = new Date();
console.log("now", now);
let date = new Date('2020-05-01');
console.log("date", date);
date = new Date(2020, 5, 1, 20); // months start with 0 pos 5 == 6 month
console.log("date", date);
date = new Date(0); //start time js
console.log("Start time js", date);
date = new Date(-999999999999);
console.log("", date);

console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getDate());
console.log(now.getDay()); // start from Sunday, day of week
console.log(now.getSeconds());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());


//setter
const tem = new Date('2020-05-01');
console.log(tem.setHours(40, 20)); // first hours next min
console.log("tem", tem);
// const seco = new Date.parse('2020-05-01')
// console.log(seco);


let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
}

let end = new Date();

console.log(end - start);