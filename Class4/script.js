console.log("Before")

let flag = true;

function fun(){
    //2sec
    console.log("oop break");
    flag = false;
}

setTimeout(fun,2000);  //runs somewhere

console.log("After")
console.log("next")

while(flag) {}