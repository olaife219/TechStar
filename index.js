console.log(5);
// The semicolon denotes the end of the line, or statement.
// Although in JavaScript your code will usually run as intended without a semicolon,
// we recommend learning the habit of ending each statement with a semicolon so you never
// leave one out in the few instances when they are required.

// TASK


// COMMENTS
// Prints 5 to the console

let num1 = null;
let num2 = undefined;
console.log(5);

console.log(5 * 2);
console.log(num1);
console.log("5" * 2);
console.log(num2);

let obj1 = {
  name: 'Tedprime',
  age: 25,
  location: 'Abeokuta'
};

let arry1 = ["Apple", "Banana", "orange"];

console.log(arry1[0]);
console.log(arry1[1]);
console.log(arry1[2]);


console.log(typeof 5);





console.log(obj1);

console.log(obj1.name);



// Prints 5

// This is a single line comment

//hdrjhrukruiierikerkl

/* This is a multi-line comment
nfcxfdhxhjvcdjhvhjdjhvd
nhfhdfvdfjjdfjdfvjjdj
gdhdfjhdrfjhdrfjjkrjkrjk
that spans multiple lines */

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

console.log(/*IGNORED!*/ 5);  // Still just prints 5

// TASK

// Data Type
console.log(9007199254740991 + 1); // 9007199254740992 ✅ (correct)
console.log(9007199254740991 + 2); // 9007199254740992 ❌ (incorrect)

// How BigInt solves it
let bigNumber = 9007199254740991n;
console.log(bigNumber + 2n); // 9007199254740993n ✅ (correct)

let bigNum = BigInt(9007199254740991);
console.log(bigNum + BigInt(2)); // 9007199254740993n

// BigInt can store any large number without losing precision.
// You cannot mix BigInt and normal numbers in operations
// console.log(5n + 2); // ❌ Error: Cannot mix BigInt and other types
console.log(5n + BigInt(2)); // ✅ 7n convert numbers first

//Task
console.log('Location of Tedprime: Idi Aba, Abeokuta');
console.log(40);

// Arithmetic operators
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log('5-1') // notice how this prints as a string instead of a number because of the quotes
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

// Assignment operator

let var1 = "apple"

// comparsion operator

// == === && ||
console.log('5' == 5);

console.log('5' === 5);

console.log(0 && 5);

console.log(null || 5);

// Falsy values
/*
1. false
2. 0, -0
3. "", '', ``
4. null
5. undefined
6. NaN
*/

// Truthy values
/*
1. true
2. 1, -1 any number apart from 0
3. "0", "false", " " nonempty strings
4. [], {}
5. function(){}
6. Infinity
*/

//Conditional Statement

// If statement
if (false) {
  console.log("This won't run");

} else {
  console.log("This will run");
}




// If else if else statement
let gender = "aishat ";

if (gender == "female") {
  console.log("Welcome ma'am")
} else if (gender == "male") {
  console.log("Welcome sir")
} else {
  console.log("Welcome")
}

//Loops
//for loop
/*
keyword(variable; condition; increment/decrement){
 code to be executed
}
*/
for (let i = 0; i < 5; i++) {
  console.log(i);
}


//while loop
/*
variable initialization
keyword(condition){
  code block
  increment/decrement
}
*/
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);


let fruit = 3;

switch (fruit) {
  case 1:
    console.log("Monday");
    break;
  case "truth":
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}



// TASK

// String Concatenation Operators
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'

// Notice in the third example we had to make sure to include a space at the end of
// the first string. The computer will join the strings exactly,
// so we needed to make sure to include the space we wanted between the two strings.
console.log('front ' + 'space');
// Prints 'front space'
console.log('back' + ' space');
// Prints 'back space'
console.log('no' + 'space');
// Prints 'nospace'
console.log('middle' + ' ' + 'space');
// Prints 'middle space'
console.log('One' + ', ' + 'two' + ', ' + 'three!');
// Prints 'One, two, three!'

// Properties
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

/*
startsWith - Checks whether a string begins with the specified characters. 
It returns true if it does, otherwise false.
endsWith - Checks whether a string ends with the specified characters.
It returns true if it does, otherwise false.

console.log('Hello'.includes('ello')); // Prints true
includes - Checks whether a string contains the specified characters.
It returns true if it does, otherwise false.
*/

// TASKKKKKKKKKKKKKKKKK



// Arithmetic operators
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

// String Concatenation Operators
console.log('Durodola' + ' ' + 'Olamide'); // Prints 'DurodolaOlamide'


let Firstname = ' Duro dola ';
let task = 'I eat eba';
let number = 5;
let boy = true;


// String Properties
console.log(Firstname.length);
console.log(Firstname.toUpperCase());
console.log(Firstname.toLowerCase());
console.log(Firstname.startsWith('T'));
console.log(Firstname.endsWith('a'));
console.log(Firstname.includes('a'));
console.log(Firstname.split('r')); // split by character 'r' and return an array of substrings ['Du', 'odola']
console.log(Firstname.slice(0, 3));
console.log(Firstname.slice(3));
console.log(Firstname.slice(-3));
console.log(Firstname.slice(0, -3)); // slice from the start to the third character from the end ' Durodo'
console.log(Firstname.indexOf('o'));
console.log(Firstname.lastIndexOf('o'));
console.log(Firstname.charAt(3));
console.log(Firstname.replace('D', 'T'));
console.log(Firstname.repeat(3)); // repeat the string 3 times ' Durodola Durodola Durodola '
console.log(Firstname.trim());
console.log(Firstname.trimStart());
console.log(Firstname.trimEnd());
console.log(Firstname.concat(' Ola'));
console.log(Firstname.concat(' Ola', ' Durodola'));

console.log(Firstname.concat('chrisphopher', ' tomi', ' praise', ' aisha', ' olamide', ' roseline'));



console.log(task.replace('eba', 'amala'));


function replaceString() {
  let str = document.getElementById("changer").value;
  let n = str.replace("eba", "amala");
  document.getElementById("display").value = n;
  return;
}


function replaceUpcase() {
  let str = document.getElementById("changer").value;
  let n = str.toUpperCase();
  document.getElementById("display").value = n;
  return;
}

function multiplyValue() {
  let str = document.getElementById("changer").value;
  let n = str.length * 2;
  document.getElementById("display").value = n;
  return;
}

function addText() {
  let str = document.getElementById("changer").value;
  let n = str.concat(' Thanks for the assignment');
  document.getElementById("display").value = n;
  str = ''
  return;
}
// Number Properties
console.log(number.toString()); // convert number to string '5'
console.log(number.toFixed(2)); // show 2 decimal places
console.log(number.toPrecision(1)); // show 1 digit
console.log(number.toExponential(3)); // show in exponential notation with 2 decimal places 5.00e+0
console.log(number.valueOf()); // return the original number value

let display = document.getElementById('display');
let ans = number * 20;
console.log(ans);


/* 1 step
function functionName(parameter) {
  // code of block
}

// 2 step
let functionName = function (parameter) {
  // code block
}

// 3 step
let functionName = (parameter) => {
  // code block
}
*/


// Function Declaration
// function greet(name) {
//   if (name) {
//     console.log('Hello ' + name);
//   } else {
//     console.log('Hello guest');
//   }
// }

// greet('Abdulhameed'); // Prints 'Hello'

// Function Expression

let greet = function (name) {
  if (name) {
    console.log('Hello ' + name);
  } else {
    console.log('Hello guest');
  }
}

greet('Abdulhameed'); // Prints 'Hello Abdulhameed'


// Arrow Function
// let greet = (name) => {
//   if (name) {
//     console.log('Hello ' + name);
//   } else {
//     console.log('Hello guest');
//   }
// }

// greet('Abdulhameed'); // Prints 'Hello Abdulhameed'



function multiply() {
  let number1 = document.getElementById('number1').value;
  let operator = document.getElementById('operator').value;
  let number2 = document.getElementById('number2').value;
  let result = document.getElementById('display');

  let num1 = Number(number1);
  let num2 = Number(number2);
  let output = ""
  for (let i = 0; i <= num2; i++) {
    switch (operator) {
      case '*':
        output += `${num1} X ${i} = ${num1 * i} <br>`;
        break;
      case '+':
        output += `${num1} + ${i} = ${num1 + i} <br>`;
        break;
      case '-':
        output += `${num1} - ${i} = ${num1 - i} <br>`;
        break;
      case '/':
        output += `${num1} / ${i} = ${num1 / i} <br>`;
        break;
      case '%':
        output += `${num1} % ${i} = ${num1 % i} <br>`;
        break;
      case '**':
        output += `${num1} ** ${i} = ${num1 ** i} <br>`;
        break;
      case 'pow':
        output += `${num1} pow ${i} = ${Math.pow(num1, i)} <br>`;
        break
      case 'sqrt':
        output += `sqrt ${num1} = ${Math.sqrt(num1)} <br>`;
        break;
      case 'sin':
        output += `cos ${num1} = ${Math.cos(num1)} <br>`;
        break;
      case 'tan':
        output += `tan ${num1} = ${Math.tan(num1)} <br>`;
        break;
      case 'cos':
        output += `cos ${num1} = ${Math.cos(num1)} <br>`;
        break;
      case 'log':
        output += `log ${num1} = ${Math.log(num1)} <br>`;
        break;
      default:
        output = "Invalid operator";
        break;
    }
    
  }
  result.innerHTML = output;
}

// Function Expression
// let greet = function () {
//   console.log('Hello');
// }

// greet(); // Prints 'Hello'

// Arrow Function
// let greet = () => {
//   console.log('Hello');
// }

// greet(); // Prints 'Hello'

// DOM Manipulation
// ? What is the DOM?
// The Document Object Model (DOM) is a programming interface for web documents.
// It represents the page so that programs can change the document structure,
// style, and content. The DOM represents the document as nodes and objects.
// That way, programming languages can connect to the page.
// The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// '' ? '' : ''
// Changing Text
// Selecting Elements
// getElementById
let header = document.getElementById('header');
console.log(header);
// getElementsByClassName
let list = document.getElementsByClassName('list');
console.log(list);
// getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);
// querySelector
let header1 = document.querySelector('#header');
console.log(header1);
let list1 = document.querySelector('.list');
console.log(list1);
let li1 = document.querySelector('li');
console.log(li1);
// querySelectorAll
let list2 = document.querySelectorAll('.list');
console.log(list2);
let li2 = document.querySelectorAll('li');
console.log(li2);
let header2 = document.querySelectorAll('#header');
console.log(header2);





