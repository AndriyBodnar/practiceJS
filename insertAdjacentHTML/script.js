const div = document.createElement("div");
div.classList.add("black");

div.innerHTML = "Hello";

const test = document.querySelectorAll("div");
console.log(test);

test[1].style.backgroundColor = "red";
