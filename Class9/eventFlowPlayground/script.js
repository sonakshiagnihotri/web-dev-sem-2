

const allLogs= document.querySelector("#all_logs")
const logBtn= document.querySelector("#clearlog")


document.querySelector("#grandparent").addEventListener("click", ()=>{
    console.log("GrandParent Clicked!"); allLogs.innerText+="GrandParent - Bubbling\n"
},false)

// document.querySelector("#grandparent").addEventListener("click", ()=>{
//     console.log("GrandParent Clicked!"); allLogs.innertext+="GrandParent - Capturing"
// },true)

document.querySelector("#parent").addEventListener("click",()=>{
    console.log("Parent Clicked!"); allLogs.innerText+="Parent - Bubbling\n" 

},false)

// document.querySelector("#parent").addEventListener("click",()=>{
//     console.log("Parent Clicked!"); allLogs.innertext+="Parent - Capturing"
// },true)

document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child Clicked!"); allLogs.innerText+="Child - Bubbling\n"
},false)

// document.querySelector("#child").addEventListener("click",()=>{
//     console.log("Child Clicked!"); allLogs.innertext+="Child - Capturing"
// },true)


document.querySelector("#clearlog").addEventListener("click",()=> {
    allLogs.innerText=""
})






