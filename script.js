let display = document.querySelector("#display");

let num = document.querySelectorAll(".num");

let del = document.querySelector("#del");

let oprt = document.querySelectorAll(".tt");

let answer = document.querySelector("#iseql");

let mul = document.querySelector("#mul");

let clear = document.querySelector("#clear");

var a = "";

let ans = eval(a);


num.forEach( function (num) {
    num.addEventListener("click", function () {
     display.textContent += num.textContent
     a += num.textContent
    })
})

oprt.forEach( function (oprt) {
    oprt.addEventListener("click" , function() {
        display.textContent +=  oprt.textContent
        a += oprt.textContent;
        console.log(a);
    })
})

mul.addEventListener("click" , function () {
    display.textContent +=  mul.textContent;
    a += "*";
})

del.addEventListener("click" , function () {
     display.textContent = display.textContent.slice(0, -1) 
      a = a.slice(0, -1);
   
})

answer.addEventListener("click" , function() {
    display.textContent = eval(a);
    
})

clear.addEventListener("click" , function () {
    display.textContent = "";
    a = "";
})