/*
User types city
→ clicks Search
→ JS reads input value
→ JS calls Weather API (URL)
→ API sends JSON
→ JS extracts data
→ JS updates HTML
*/

//1️⃣ Take input from the textbox
const input= document.getElementById("my_location");
const button= document.getElementById("btn");


//2️⃣ Listen for button click
button.addEventListener("click", async()=>{
    const city=input.value.trim();
    console.log(`City: ${city}`);


    const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=574eed2f5f2e465992543559262301&q={city},IN &aqi=no`,
        );

        const jsonData = await response.json();
        console.log(jsonData);
})
