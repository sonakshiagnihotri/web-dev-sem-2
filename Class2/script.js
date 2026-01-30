//function declaration

//1.) using arguments
function greet (a){

    console.log("Hello" , arguments[6]); //Hello 6

}

greet(1,2,3,4,"ABC",true,11);



 function noOfArg(){
    console.log(arguments.length);
 }
 noOfArg(3,4,"f");
 
 
 //2.) using rest operator

 function findArg(a,b,...arg){
    //print all args
    console.log(a,b,arg)
 }
 findArg(1,2,3,4,"luffy","buggy",8,7,"fruit")
//here ...arg is an array

//This keyword

// const x = {
//     name: "Sonakshi Agnihotri",
//     role: "Js developer",
//     exp: 3000,
//     show: function(){
//         //console.log(this);
//         setTimeout function(){
//             console.log("this",this)
//         }
//         // console.log("Hi I am", this.name)
//     }
// }

console.log(x.name);
console.log(x.role);
console.log(x.exp);

x.show();

const y = {
    name: "Agnihotri Sonakshi ",
    role: "Py developer",
    exp: 8000,
    show: function(){
        console.log("Hi I am", this.name)
    }
}

console.log(y.name);
console.log(y.role);
console.log(y.exp);

y.show();
 //"arguments" doesnt exist in arrow function
 let x=10;
 function outer(){
    let x=20;
    function inner(){
        console.log(x);
    }
    inner();
 }
 outer();

