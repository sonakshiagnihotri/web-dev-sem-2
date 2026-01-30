let arr= [0,1,2,3,4,5,6,7];
arr.push(8);
arr.shift(0);//0th idx gets removed
console.log(arr)

//slice
let subarr = arr.slice(2,6);
console.log(arr)
console.log(subarr)


//splice
let subsubarr = arr.splice(2,3);
console.log("spliced arr",arr)
console.log(subarr)
console.log("spliced subsubarr",subsubarr)


//REMOVE AND ADD ELEMENTS splice(startidx,noOfElem, elem1,elem2,elem3,elem1)