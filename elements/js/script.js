"use strict";

const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button")[1];
console.log(btns);

const circles = document.getElementsByClassName("circle");
console.log("circles", circles[2]);

const hearts = document.querySelectorAll(".heart");
console.log("hearts", hearts);

hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector(".heart");
console.log("oneHeart", oneHeart);

console.dir(box);

box.style.backgroundColor = "pink";
