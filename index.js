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



// Number Properties
console.log(number.toString()); // convert number to string '5'
console.log(number.toFixed(2)); // show 2 decimal places
console.log(number.toPrecision(1)); // show 1 digit
console.log(number.toExponential(3)); // show in exponential notation with 2 decimal places 5.00e+0
console.log(number.valueOf()); // return the original number value

let display = document.getElementById('display');
let ans = number * 20;
console.log(ans);
