console.log("     Hello Developers.     ")//0 based indexing

let str= "   Hello Developers cat dog   "


console.log(str.length)//length

console.log(str.charAt(9))//character

console.log(str.charCodeAt(9)); //ASCII code

//Substring

console.log(str.substring(10)) //all the chars after index10


//start<end
console.log(str.substring(9,11)) //from char startidx to endidx-1 =>startidx included and endidx excluded


//start>end
console.log(str.substring(11,9)) //idx will be swapped before applying the substring function

//-ve
console.log(str.substring(-100))//ends up printing the entire string from 0 to end

//Slice function
let sl1=sl1.slice(10); //all chars after index10
console.log(sl1);

//start<end
let sl2=sl2.slice(9,11);
console.log(sl2)//idx 9 and idx 10

//end>start
console.log(str1.substring(11,9))//idx 9 and idx 10=>swaps before applying the substring function





