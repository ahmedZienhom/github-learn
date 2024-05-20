// IMPORTANT DONOT DELETE OR COMMENT THIS FUNCTIONS

function numChecker (num) {
    while (isNaN(num)) {
        alert(`unvalid input!`);
        num = Number(prompt(`enter a valid number`));
    }
    return num
}

function alphabetChecker(str) {
    while(!/^[a-zA-Z]+$/.test(str)) {
        alert(`wrong input!`);
        str = prompt(`enter an alphabetical characters only`);
    }
    return str
}

function operatorChecker (operator) {
    switch (operator) {
        case `+`:
        case `-`:
        case `/`:
        case `*`:
            return operator;
        default:
            alert(`wrong operator try again`);
            operator = prompt(`enter a valid operator`);
            return operatorChecker(operator);
    }
}

// IMPORTANT DONOT DELETE OR COMMENT THIS FUNCTIONS
//  ------------------------------- JS Assignment 1 -----------------------
//  => Q 1 <= Write a program that allow to user enter number then printit

// function printIt (){
//    var random = numChecker(Number(prompt(`enter a random number`)));
    
//     console.log(`your random number is ${random}`);
//     document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">your random number is ${random} </h1>`;
// }

// printIt();

// --------------------------------------------------------------------------
//  => Q 2 <= Write a program that take number from user then print yes if that number can divide by 3
// and 4 otherwise print no

// function canDivide (dividedNum) {
//     var num1 = 3, num2 = 4;

//     if (dividedNum % num1 === 0 && dividedNum % num2 === 0) {
//         console.log(`yes number ${dividedNum} can divide by 3 and 4`);
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">yes number ${dividedNum} can divide by 3 and 4 </h1>`;
//     }else {
//         console.log (`no number ${dividedNum} cannot divide by 3 and 4`);
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">no number ${dividedNum} cannot divide by 3 and 4</h1>`;
//     }
// }


// var dividedNum = numChecker(Number(prompt("enter a random number")));

// canDivide(dividedNum);

// --------------------------------------------------------------------------
//  => Q 3 <= Write a program that allows the user to insert 2 integers then print the max

// function maxNum (num1, num2) {
//     return num1 > num2 ;
// }

// var num1 = numChecker (Number(window.prompt("write first number")));
// var num2 = numChecker (Number(window.prompt("write second number")));

// console.log(maxNum(num1, num2) ? `number ${num1} is max` : `number ${num2} is max`);
// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${maxNum(num1, num2) ? `number ${num1} is max` : `number ${num2} is max`}</h1>`;

// --------------------------------------------------------------------------
//  => Q 4 <= Write a program that allows the user to insert an integer then print negative if it is
// negative number otherwise print positive. 

// function negativeOrPositive (num) {
//     if ( num < 0 ) {
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the number is negative</h1>`;
//         console.log("the number is negative");
//     }else if (num === 0) {
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the number is zero</h1>`;
//         console.log("the number is zero");  
//     } else {
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the number is positive</h1>`;
//         console.log("the number is positive");
//     }
// }


// negativeOrPositive(numChecker(Number(window.prompt("enter a number"))));

// --------------------------------------------------------------------------
//  => Q 5 <= Write a program that take 3 integers from user then print the max element
// and the min element.

// function maxNum (num1, num2, num3) {

//     var str = "";

//     if (num1 > num2 && num1 > num3) {
//         str += `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize">max number is ${num1}</h1>`;
//         console.log(`max number is ${num1}`);
//         if (num2 > num3) {
//             str += `<h2 class = " p-5 mt-3 rounded-4 text-white bg-black text-capitalize">min number is ${num3}</h2>`;
//             console.log(`max number is ${num3}`);
//         }
//         else {
//             str += `<h2 class = " p-5 mt-3 rounded-4 text-white bg-black text-capitalize">min number is ${num2}</h2>`;
//             console.log(`min number is ${num2}`);
//         }
//     } 
//     else if (num2 > num3 && num2 > num1) {
//         str += `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize">max number is ${num2}</h1>`;
//         console.log(`max number is ${num2}`);
//         if (num1 > num3) {
//             str += `<h2 class = " p-5 mt-3 rounded-4 text-white bg-black text-capitalize">min number is ${num3}</h2>`;
//             console.log(`max number is ${num3}`);
//         }
//         else {
//             str += `<h2 class = " p-5 mt-3 rounded-4 text-white bg-black text-capitalize">min number is ${num1}</h2>`;
//             console.log(`min number is ${num1}`);
//         }
//     }
//     else if (num3 > num2) {
//         str += `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize">max number is ${num3}</h1>`;
//         console.log(`max number is ${num3}`);
//         if (num1 > num2) {
//             str += `<h2 class = " p-5 mt-3 rounded-4 text-white bg-black text-capitalize">min number is ${num2}</h2>`;
//             console.log(`max number is ${num2}`);
//         }
//         else {
//             str += `<h2 class = " p-5 mt-3 rounded-4 text-white bg-black text-capitalize">min number is ${num1}</h2>`;
//             console.log(`min number is ${num1}`);
//         }
//     }
//     else {
//         str += `<h1 class = " p-5 rounded-4 text-white bg-black text-capitalize">the 3 numbers is equals</h1>`;
//             console.log(`the 3 numbers is equals`);
//     }

//     return str;
// }

// var num1 = numChecker(Number(window.prompt("enter first number")));
// var num2 = numChecker(Number(window.prompt("enter second number")));
// var num3 = numChecker(Number(window.prompt("enter third number")));

// document.getElementById("demo").innerHTML = maxNum(num1,num2,num3);

// --------------------------------------------------------------------------
//  => Q 6  <= Write a program that allows the user to insert integer number then
// check If a number is oven or odd


// function odOrEven(num) {
//     return num % 2 == 0;
// }



// var num = numChecker(Number(window.prompt("enter a randon number")));

// var result = odOrEven(num) ? `the number is even` :  `the number is odd`

// console.log(result);
// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${result}</h1>`;

// --------------------------------------------------------------------------
//  => Q 7 <= Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
// then print vowel otherwise print consonant

// function isvowel (char) {
   
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") { 
//             console.log(`the character is vowel`);
//             document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the caracter is vowel</h1>`;
//         }
//         else {
//             console.log(`the character is consonant`);
//             document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the caracter is consonant</h1>`;
//         }
//     }

// var char = alphabetChecker(window.prompt("enter a character").toLowerCase());

// isvowel(char[0]);

// --------------------------------------------------------------------------
//  => Q 8 <= Write a program that allows user to insert integer then print all numbers between 10 to
// that’s number


// function iterator(num) {
//     var remainingNumbers = "The remaining numbers ";
//     console.log("The remaining numbers");
//     if (num <= 10) {
//         for (;num <= 10; num++) {
//             remainingNumbers += `${num} `;
//             console.log(num);
//         }
//     }
//     else {
//         console.log(`there is no remaining numbers ${num} is greater than 10`);
//         remainingNumbers = (document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${num} is greater than 10</h1>`);
//         return;
//     }
//     document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${remainingNumbers}</h1>`;
// }


// num = numChecker(Number(window.prompt("enter a number")));


// iterator(num);

// --------------------------------------------------------------------------
//  => Q 9 <= Write a program that allows userto insert integerthen print a multiplication table up to 12.

// function multiple (num) {
//     var str = `the multiple of ${num} from 1 to 12 is => `;
//     console.log(`the multiple of ${num} from 1 to 12 is `);
//     for (i = 1; i <= 12 ; i++) {
//         if(i * num === 0) {
//             console.log(`any number multiple zero is zero`);
//             return `any number multiple zero is zero`;
//         } 
    
//         console.log(num * i);
//         str += `${num * i} | `;
//     }
//     return str;
// }

// var numToMultiple = numChecker(Number(window.prompt(`enter a number`)));



// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${multiple(numToMultiple)}</h1>`;

// --------------------------------------------------------------------------
//  => Q 10 <= Write a program that allows to user to insert number then print all even numbers
//between 1 to this number

// function evens(num) {
//     if (num < 1) {
//         console.log('the number should be more than 1');
//         return `the number should be more than 1`;
//     }

//     console.log(`the even numbers till ${num} is`);

//     var str = `the even numbers till ${num} is =>`;

//     for (i = 2; i <= num; i += 2) {
//         console.log(i);
//         str += `${i} | `;
//     }

//     return str;
// }

// var num = numChecker(Number(window.prompt("enter a number")));

// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${evens(num)}</h1>`;

// --------------------------------------------------------------------------
//  => Q 11 <= Write a program that take two integers then print the power

// function pow(num1, num2) {
//     var ternary = num1;

//     for (i = num2 ; i > 1; i--) {
//         ternary *= num1 ;
//     }

//     console.log (`${num1} pow ${num2} => ${ternary}`);
//     document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${num1} <sup>${num2}</sup> is => ${ternary}</h1>`;
// }

// pow(numChecker(Number(window.prompt("enter the number"))), numChecker(Number(window.prompt("enter the power"))));

// --------------------------------------------------------------------------
//  => Q 12 <= Write a program to enter marks of five subjects and calculate total, average and
//percentage.

// function subjects() {
//     var marks = [];

//     window.alert("enter the mark for every subject");

//     for (var i = 0; i < 5; i++) {
//         marks.push(numChecker(Number(window.prompt(`enter marks of subject number ${i + 1}`))));
//         if (marks[i] < 0 || marks[i] > 100 ) {
//             window.alert(`${marks[i]} is not right marks `);
//             window.alert(`try again and enter a valid marks`);
//             subjects();
//             return;
//         }
//     }
//     var total = 0;
//     for (i = 0 ; i < marks.length; i++) {
//         total += marks[i];
//     }
//     var avg = total / marks.length;

//     console.log(`the total is => ${total}`);
//     console.log(`the average is => ${avg}`);
//     console.log(`the percentage is => ${avg}%`);

//     document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the total is => ${total} <br/>the average is => ${avg} <br/>the percentage is => ${avg}%</h1>`;
// }

// subjects();

// --------------------------------------------------------------------------
//  => Q 13 <= Write a program to input month number and print number of days in that
//month.

// function monthsOfYear (num) {
//     if (num > 12 || num < 0 ) {
//         alert(`unvalid month the year have 12 months only from 1 to 12`);
//         newNum = numChecker(Number(prompt(`enter a valid month`)));
    
//         return monthsOfYear(newNum);
//     }
//     else if (num === 1 || num === 3 ||num === 5 || num === 7 || num === 8 ||num === 10 || num === 12) {
//         return `Days in Month: 31`;
//     } else if (num === 4 || num === 6 || num === 9 || num === 11) {
//         return `Days in Month: 30`;
//     } 
        
    
//     return `Days in Month: 28`;
// }

// var month = numChecker(Number(prompt(`enter the month you want to know the number of days`)));

// var result = monthsOfYear(month);

// console.log(result);

// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${result}</h1>`;

// --------------------------------------------------------------------------
//  => Q 14 <= Write a program to input marks of five subjects
//Physics, Chemistry, Biology, Mathematics and Computer
//, Find percentage and grade

// function grade () {
//     var marks = {
//         Physics : numChecker(Number(prompt(`enter marks of physics`))),
//         Chemistry : numChecker(Number(prompt(`enter marks of Chemistry`))),
//         Biology : numChecker(Number(prompt(`enter marks of Biology`))),
//         Mathematics : numChecker(Number(prompt(`enter marks of Mathematics`))),
//         Computer : numChecker(Number(prompt(`enter marks of Computer`)))
//     };

//     var marksArr = [marks.Physics, marks.Chemistry, marks.Biology, marks.Mathematics, marks.Computer];
//     var total  = 0;

//     for (i = 0 ; i < marksArr.length; i++) {
//         if (marksArr[i] < 0 || marksArr[i] > 100 ) {
//             alert(`there is no grade ${marksArr[i]} \n try again and enter a valid grades`);
//             return grade();
//         }

//         total += marksArr[i];
//     }   

//     return total / marksArr.length;
// }

// var marks = grade(); 

// console.log(`Percentage => ${marks}% Grad => ${marks >= 90 ? `A` : marks >= 80 ? `B` : marks >= 70  ? `C` : marks >= 60 ? `D` : marks >= 40 ? `E` : `F`}`);

// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">Percentage => ${marks}% Grad => ${marks >= 90 ? `A` : marks >= 80 ? `B` : marks >= 70  ? `C` : marks >= 60 ? `D` : marks >= 40 ? `E` : `F`}</h1>`;


//******************************** Using switch case*******************************

// --------------------------------------------------------------------------
// => Q 15 <= Write a program to print total number of days in month

// function month (num) {
//     switch (num) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//              console.log(`Days in Month: 31`);
//              document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">Days in Month: 31</h1>`;
//              break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log(`Days in Month: 30`);
//              document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">Days in Month: 30</h1>`;
//              break;
//         case 2:
//             console.log(`Days in Month: 28`);
//              document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">Days in Month: 28</h1>`;
//              break;
//         default :
//         alert(`unvalid month the year have 12 month \n try again and enter a valid number from 1 to 12`);
//         month(numChecker(Number(prompt(`enter a month number`))));
//     }
// }

// month(numChecker(Number(prompt(`enter a month number`))));

// --------------------------------------------------------------------------
//  => Q 16 <= Write a program to check whether an alphabet is vowel or consonant


// function isvowel (char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             console.log(`the character is vowel`);
//             document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the caracter is vowel</h1>`;
//             break;
//         default:
//             console.log(`the character is consonant`);
//             document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the caracter is consonant</h1>`;
//             break;
//     }
// }


// var char = alphabetChecker(prompt("enter a character").toLowerCase());

// isvowel(char[0]);

// --------------------------------------------------------------------------
//  => Q 17 <= Write a program to find maximum between two numbers

// function max(num1, num2) {
//     switch (true) {
//         case num1 > num2:
//             return num1;
//         case num1 <= num2:
//             return num2;  
//     }
// }

// var num1 = numChecker(Number(prompt(`enter first number`)));
// var num2 = numChecker(Number(prompt(`enter second number`)));

// var result = `max number is => ${max(num1, num2)}`;

// console.log(result);
// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${result}</h1>`;

// --------------------------------------------------------------------------
//  => Q 18 <= Write a program to check whether a number is even or odd

// function odOrEven(num) {
//     return num % 2 === 0;
// }

// var num = numChecker(Number(prompt(`enter a number to check odd or even`)));


// switch (odOrEven(num)) {
//     case true:
//         console.log(`the number is even`);
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the number is even</h1>`;
//         break;
//     default:
//         console.log(`the number is odd`);
//         document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the number is odd</h1>`;
//         break;
// }

// --------------------------------------------------------------------------
//  => Q 19 <= Write a program to check whether a number is positive or negative or zero

// function positiveOrNegative(num) {

//     switch (true) {
//         case num > 0 :
//             return `positive`;
//         case num < 0 :
//             return `negative`;
//         default:
//             return`zero`;
//     } 
// }

// var num =  numChecker(Number(prompt(`enter a number`)));

// var result = positiveOrNegative(num);

// console.log(`the number is ${result}`);
// document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">the number is ${result}</h1>`;

// --------------------------------------------------------------------------
//  => Q 20 <= Write a program to create Simple Calculator

// function calculator (num1, operator, num2) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '/':
//             return num1 / num2;
//         case '*':
//             return num1 * num2;
//         default:

//             return calculator(num1, operator, num2);
//     }
// }

// var num1 = numChecker(Number(prompt(`enter first number`)));
// var operator = operatorChecker(prompt(`enter operator`));
// var num2 = numChecker(Number(prompt(`enter second number`)));

// var result = calculator(num1, operator, num2);

// console.log(`${num1} ${operator} ${num2} = ${result}`);
//  document.getElementById("demo").innerHTML = `<h1 class = " p-5  rounded-4 text-white bg-black text-capitalize ">${num1} ${operator} ${num2} = ${result}</h1>`;


var productInfo = [document.getElementById(`ProductName`),
                document.getElementById(`ProductPrice`),
                document.getElementById(`ProductCategory`),
                document.getElementById(`ProductDesc`),
                document.getElementById(`ProductImg`)
]

var products = [];

function addProduct() {
    var product = {
        name : productInfo[0].value,
        price : Number(productInfo[1].value),
        category : productInfo[2].value,
        desc : productInfo[3].value,
        img : productInfo[4].value
    }

    console.log(typeof productInfo[1].value);

    products.push(product);
    console.log(products);   
}