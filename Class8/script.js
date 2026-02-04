// //SIRS WAY

// //taking input
// const input= document.getElementById("my_location");
// const button= document.getElementById("btn");


// button.addEventListener("click", () => {
//   const location = input.value.trim();
//   console.log(location);
//   //call the API ->
//   fetchWeather(location).then((data) => {
//     // console.log("Data is ...", data);
//   //update the DOM

//  updateDOM(data);
//     const dayName = new Date(date).toLocaleDateString("en-US", {
//   weekday: "long",
// });
//   });


//   inputElem.value = "";
// });
// async function fetchWeather(location) {
//   console.log("Inside function");

//   const url=`http://api.weatherapi.com/v1/current.json?key=574eed2f5f2e465992543559262301&q=${location},IN&aqi=no`;
//   const response = await fetch(url);
//   console.log(response);
//   const jsonData = await response.json();

//   return jsonData;
// }



// function updateDOM(data){
//     //********* filter required data********



//     console.log("Will update DOM",data);

//     const temperature=data.current.temp_c;
//     const location =data.location.name;
//     const timedata=data.location.localtime;
//     const [date,time]=timedata.split(" "); //2026-01-23 10:07
//     const iconUrl =data.current.condition.icon;




//     //*********** update the dom ***********

//     //select El.

//         //DOM SELECTION
// const tempEl = document.querySelector(".temp-input");
// const locationEl = document.querySelector(".location");
// const timeEl = document.querySelector(".time");
// const dayEl = document.querySelector(".day");
// const dateEl = document.querySelector(".date");
// const conditionEl = document.querySelector(".condition");
// const iconEl = document.querySelector(".weather-status img");



// tempEl.textContent = `${data.current.temp_c}°C`;
// locationEl.textContent = `${data.location.name}, ${data.location.region}`;
// timeEl.textContent = time;
// dateEl.textContent = date;
// dayEl.textContent = dayName;
// conditionEl.textContent = data.current.condition.text;
// iconEl.src = "https:" + data.current.condition.icon;


// }



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
const input = document.getElementById("my_location");
const button = document.getElementById("btn");

//2️⃣ Listen for button click
button.addEventListener("click", async () => {
    


  const city = input.value.trim();
  console.log(`City: ${city}`);

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=574eed2f5f2e465992543559262301&q=${city},IN&aqi=no`,
  );

  const jsonData = await response.json();
  console.log(jsonData);
  updateDOM(jsonData);
});

function updateDOM(data) {
  //********* filter required data********
    

  //DOM SELECTION
  const tempEl = document.querySelector(".temp-input");
  const locationEl = document.querySelector(".location");
  const timeEl = document.querySelector(".time");
  const dayEl = document.querySelector(".day");
  const dateEl = document.querySelector(".date");
  const conditionEl = document.querySelector(".condition");
  const iconEl = document.querySelector(".weather-status img");


  // Extract date & time
  const localTime = data.location.localtime; // "YYYY-MM-DD HH:MM"
  const [date, time] = localTime.split(" ");

  const dayName = new Date(localTime).toLocaleDateString("en-IN", {
    weekday: "long",
  });



  //*********** update the dom ***********
  tempEl.textContent = `${data.current.temp_c}°C`;
  locationEl.textContent = `${data.location.name}, ${data.location.region}`;
  timeEl.textContent = time;
  dateEl.textContent = date;
  dayEl.textContent = dayName;
  conditionEl.textContent = data.current.condition.text;
  iconEl.src = "https:" + data.current.condition.icon;
}
