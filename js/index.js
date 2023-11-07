//TASK1
//function registerCustomer () {
//const LastName = prompt ('Enter your last name');
//const FisrtName = prompt ('Enter your first name');
// const email= prompt ('Enter tour email address') ;
//const formattedString = email + "-" + LastName + "-" + FisrtName;

//return formattedString;
//}
// const registrationInfo = registerCustomer();
//console.log ("Registration Info:" + registrationInfo)

//TASK2

//function  calculateDeliveryCost () {

//var distance= prompt ("Enter the distance in kilometers.");

//var fixedrate=5;
//var kilometerrate=0.25;
// var deliveryCost = fixedrate +(kilometerrate * distance);

//return the cost of delivery
//return deliveryCost;
//}

//call the function and the result
//var const = calculateDeliveryCost();
//console.log ('The cost of the delivery is:' + cost + 'Azn')



//TASK3
// const productName = prompt("Enter the product name");
// const unitPrice = prompt("Enter the unit price");
// const quantity = prompt("Enter thr product quantity");
// const participatesThePromotion = prompt("Enter the participates (yes/no)");

// function calculateProductAmount(name, price, quantity, promotion) {
//   let amount = price * quantity;
//   if (quantity >= 5) {
//     amount *= 0.9;
//   }
//    else if (promotion == "yes") {
//     amount *= 0.85;
//   }
//   return `${amount}azn for ${quantity} ${name}`;
// }
// const answer = calculateProductAmount(
//   productName,
//   unitPrice,
//   quantity,
//   participatesThePromotion
// );

// console.log("answer", answer);




//Task4
// function suggestTable() {
//     const numGuests = parseInt(prompt("Enter the number of guests:"));

//   if (isNaN(numGuests) || numGuests < 1) {
//     return "Invalid input. Please enter a valid number of guests.";
//   } else if (numGuests <= 2) {
//     return "Small table";
//   } else if (numGuests <= 4) {
//    return "Medium table";
//   } else if (numGuests <= 8) {
//     return "Large table";
//   } else {
//     return "The restaurant cannot accommodate a company of more than 8 people within one table.";
//   }

//  }

//   const suggestedTable = suggestTable();

//   console.log ("Suggested table:", suggestedTable);




//TASK5
// const first_country = prompt("Enter first temperature");
// const second_country = prompt ("Enter second temperature");
// const third_country = prompt ("Enetr third temperature");
// const array = [first_country,second_country,third_country];

// function annual_temperature (first_country,second_country,third_country) {
//     const new_array = array.sort ((a,b) => {return b-a}) ;
//     return new_array;
// }
// const answer= annual_temperature (first_country,second_country,third_country);
// console.log (answer)


//TASK6
//  const Customername = prompt("Enter customer's name:");
//   const Customerage = parseInt(prompt("Enter customer's age:"));
//   const numOrders = parseInt(prompt("Enter the number of orders:"));
//   const Amountsorder = parseInt (prompt("Enter the amounts of orders:"));

// function checkDiscountSuitable(name,age,number,amount) {
//    if (age>=60 || (number >=4,  amount >= 100)) {
//     return `${name} receive a discount`;
//   } else {
//     return `${name} not receive a discount`;
// }
// }
// const answer= checkDiscountSuitable(
//   Customername,
//   Customerage ,
//  numOrders ,
//  Amountsorder
// );
// console.log ( checkDiscountSuitable(
//   Customername,
//   Customerage ,
//  numOrders ,
//  Amountsorder
// ));

//TASK7
//  var Slenght = parseFloat (prompt("Enter the lenght in cm"));
//  var Swidth = parseFloat (prompt("Enter the width in cm"));
//  var Sheight = parseFloat (prompt("Enter the height in cm"));
//  var Sweight = parseFloat (prompt("Enter the weight in kg"));
//  var Sdistance = parseFloat (prompt("Enter the distance in km"));

//  function shippingService (lenght,width,height,weight,distance) {
//     if ( lenght+width+height <=150 && lenght<=100 && width <=100 && height <=100 && weight<=10 && distance >=3 && distance <= 10 ) {
//         console.log ("The shipment is small.");
//     } else {
//         console.log ("The shipment is not small.");
//     }
//  }

//  const answer = shippingService (Slenght,Swidth,Sheight,Sweight,Sdistance);
//   console.log (answer)



//TASK8
// const number = prompt ("Enter a two-digits number.");

// function convertsText (number) {
//     const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//   const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
//         if (number<10) {
//  console.log (ones[number]);
//   } else if (number < 20) {
//    console.log(teens[number - 10]);
// } else {
// const tensDigit = Math.floor(number / 10);
//   const onesDigit = number % 10;
//   console.log(tens[tensDigit] + (onesDigit === 0 ? '' : ' ' + ones[onesDigit].toLowerCase()));
//     }
// }
  
//   const answer = convertsText(number);
//    console.log (answer)
  


//TASK9
// const number = parseInt(prompt("Enter a number."));

// function consoleDivisible(number){

//     for (let i= 1;i<=1000;i++) {

//        if (i% number===0) {

//         console.log (i);
//        }
//    }
// }
// const answer= consoleDivisible (number);
//  console.log (answer)

    
    //TASK10
// const amount = parseFloat (prompt("Enter the initial amount"));
// const years = parseInt (prompt("Enter thr duration in years"),10);
// const rate = parseFloat (prompt("Enter the annual interest rate in %:")) /100;
// function Savingbank (number) {
//     let finalAmount = amount * Math.pow(1 + rate, years);
//        return finalAmount;
// }
// const answer= Savingbank(amount,years,rate);
//   console.log (answer)

//TASK11
// const orderPoint = parseInt(prompt("Enter the order number: "));
// function calculateLoyaltyNumber (point) {
//     if (orderPoint<=0) {
//         return 0;
//     } else if (orderPoint===1 || orderPoint===2) {
//         return 1;
//     } else {
// let previous= [1,1];
// let presently=0;
// for(let i=3;i<=orderPoint;i++) {
//     presently= previous[0]+previous [1];
//     previous[0]=previous[1] ;
//     previous[1]= presently;
// }
// return presently;
//     }
// }
// const answer= calculateLoyaltyNumber(orderPoint);
// console.log (answer)





//TASK12

// const code= prompt ("enter your code");
// function Digitscode (number) {
//     const digits = code.split ('').map(Number);
//         const sum = digits.reduce((acc, digit) => acc + digit, 0);
//         return sum;
    
// }
// const answer= Digitscode(code);
//  console.log (answer)


//TASK13
// const amountBanknotes = parseInt(prompt("Enter the amount."));
// function optimalBanknotes (amounts){
//  const denominatons= [100,50,20,10,5,1];
// const banknotes = {};
// for (let i=0;i<denominatons.length;i++) {
//     const denominaton= denominatons[i];
//     const count = Math.floor (amounts/denominaton);

//     if (count>0) {
//         banknotes [denominaton]=count;
//         amounts-=count*denominaton;
//     }
// }
// return banknotes;
// }
// const answer= optimalBanknotes(amountBanknotes);
//  console.log (answer)





















