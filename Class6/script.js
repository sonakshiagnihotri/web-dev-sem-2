const cart=["shirt","jeans","skirt","tie","socks"];
const promise= createOrder(cart);

console.log(promise);

promise.then(function (orderId){
    //This runs when Promise is fulfilled
    console.log(orderId);
});

//Creation of promise/backend side/producer side

function createOrder(cart){
    function validateCart(){
        return true;
    }
    const pr= new Promise(function(resolve,reject){
        //createOrder
        //validate the cart(check in stock)
        //return orderId

        //(Fail-first approach)
        if(!validateCart(cart)){
            setTimeout(function(){
                //mimicking async BE jobs.
                const err= new Error("Cart is invalid");
                reject(err);
            },2000);
        }

        //logic for createOrder
        const orderId="11010";

        if(orderId){
            setTimeout(function(){
                //mimicking BE jobs
                resolve(orderId);
            },5000);
        }
    })
}