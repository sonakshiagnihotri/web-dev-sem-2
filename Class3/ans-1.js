let str = " Learn JavaScript Functions Arrow IIFE ";

//Trim the input string and print the cleaned value and its length
console.log(str.trim())


//Convert the cleaned string to lowercase and uppercase
console.log(str.toLowerCase())
console.log(str.toUpperCase())


//Extract the word 'JavaScript' using substring() and slice()
//console.log(str.excludes("JavaScript"))
str.includes("JavaScript")
console.log(str.substring(7,17));
console.log(str.slice(7,17));

//Check whether the query contains: functions, arrow, and iife
// if (str.includes("functions")&&str.includes("arrow")&&str.includes("iife"))
//     return true;
str.toLowerCase().includes("function")



//Print the character at index 6 and the ASCII value of the first character
console.log(str.charAt(6));
console.log(str.charCodeAt(1));

//Perform a case-insensitive check for the word 'javascript'
//console.log(str.includes("javascript")) case sensitiveeee so wrong

//BONUS
//1. Why is trimming user input important in real-world applications?
//=>becauseeeee the spaces at the start or end of a string are always ACCIDENTAL but the accidental spaces BETWEEN two WORDS in a string wont be removed


//2. What bug can occur if case normalization is skipped?
//normalization= bring 2 things at the same LEVEL to keep balance and for further comparision
//TO REMOVE CASE SENSITIVITY


//3. How does poor string parsing affect search accuracy and user experience?
//the spaces misbehave,,,, string parsing is basically trimming/sensitivity/etcetc
//user EXPERIENCE will be messed up






