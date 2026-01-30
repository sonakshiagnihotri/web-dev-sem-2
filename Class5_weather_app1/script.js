// const button=document.querySelector("button")
// console.log("Before");
// //Asynchronous
// button.addEventListener("click", () => {
//     console.log("I was clicked");
// });
// console.log("After");

//API ->https://jsonplaceholder.typicode.com/todos/1

        //PROMISe
        // fetch("https://jsonplaceholder.typicode.com/todos/1").then(
        //     //After Promise has been responded to.
        //     function(response){
        //         console.log(response);

        //         if(response.status == 200) {
        //             response.json().then(function(jsonData){
        //                 console.log(jsonData)
        //             })
        //         } else {
        //             alert("Data not found!!")
        //         }
                
        //     },
        // );



//Async await
    console.log("Before");
    async function fn(){
        console.log("Inside function")
        //if you remove the below await you'll see promise pending
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1",
        );
        //js aint waiting the line by line function execution is waiting for the response
        //fetch api is-----> is a PROMISE for an answer either printing whats asked or error so await is waiting for the response thats been promised
        console.log(response);
        const jsonData = await response.json();
        console.log("Bottom of fn")
        console.log(jsonData);
    }

    fn();
    console.log("After");
    