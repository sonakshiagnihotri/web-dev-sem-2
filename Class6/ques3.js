//task 1

let isOpen=true;

function checkRestaurantStatus(){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            if(isOpen==true){
                resolve("Restaurant is Open");
            } else {
                reject("Restaurant is Closed");
            }
        },1000);
    })
}

//task 2

function getMenu(){
    return new Promise((resolve,reject)=>{
        resolve["Burger","Pizza"];
    });
}

function placeOrder(menu){
    return new Promise((resolve)=>{
        resolve("Order Placed");
    });
}

function assignDelivery(orderStatus){
    
}