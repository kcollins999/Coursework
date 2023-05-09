// If a customer has a subscription, the customer will receive a 25% discount
// If the customer has a coupon, the customer will receive a $10 discount d



const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
// 1. multiply number of refills by refill cost for each customer
//function subTotal(cust) {
    //let currentTotal =
//cust.pricePerRefill * cust.refills;
    //return currentTotal;
//};

// 2. If customer has prescription multiply by 25 to receive subscription total.
//function subscriptionAmount(cust) {
    //if (cust.subscription) {
        //let subscription = 
        //subTotal(cust) - subTotal(cust) * .25;
        //return subscription;
    //}
//}

// console.log(subscriptionTotal)

// 3. take the amount found in the function subscription amount and usee it to find a subscription
// And a total if only the coupon
function totalDiscountAmount(cust) {
    let finalAmount;
    if (cust.subscription && cust.coupon) {
        finalAmount = subTotal(cust) - subTotal(cust) * .25 -10;
    } else if (cust.subscription) {
        finalAmount = subTotal(cust) - subTotal(cust) * .25;
    }
}