// Donna Quach, JavaScript 310B, Autumn 2023
// Class 2 Exercises 

// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

// Best friend property 
const brady_ = {
  firstName: 'Brady',
  lastName: 'S.',
  'favorite food': 'French food or spicy food'
};

// Donna property 
const donna_ = {
  firstName: 'Donna',
  lastName: 'Quach',
  'favorite food': 'chow fun',
  bestFriend: brady_
};

// 2. console.log best friend's firstName and your favorite food
console.log(`Donna's best friend's name is: ${donna_.bestFriend.firstName}!`);
console.log(`Donna's favorite food is ${donna_["favorite food"]}!`);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let mytwoDimArray = [['-', 'O', '-'], ['-', 'X', 'O'], ['X', '-', 'X']]; // '-' represents an empty square on the tic-tac-toe board
console.log(mytwoDimArray[0]); // Before updating top right square value 
console.log(mytwoDimArray[1]);
console.log(mytwoDimArray[2]); 
console.log('\n'); // To separate the "old" and "new" tic-tac-toe boards in the console 

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

mytwoDimArray[0][2] = 'O'; 

// 5. Log the grid to the console.
// Please note that the syntax used here will print array as a tic-tac-toe board in VS Code's debug console but not in the browser console. Instead, browser will print each square's value on its own line! (i.e. Will take up 9 lines)
// If I write "console.log(mytwoDimArray);" in VS Code, then the opposite will occur. Browser console will display it as a tic-tac-toe board. 
console.log(mytwoDimArray[0]); 
console.log(mytwoDimArray[1]);
console.log(mytwoDimArray[2]); 


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

// Note: Regex expressions always start and end with a forward slash '/', if this is omitted, then the JavaScript RegExp.prototype(test) will NOT work! 
// Note 2: Used \w instead of [a-zA-Z] because it is possible that email addresses contain numbers and underscores. Also had to escape the "." character with a backslash in order to include it in the regex. 

// My regex expression: /\w+@\w+\.\w+/


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const assignmentDateConv = new Date(assignmentDate); 
console.log('\n'); // To separate the answer from Question 7 from Question 6
console.log(assignmentDateConv);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dayMilliseconds = 86400000; // # of milliseconds in a day 
const sevendayMilliseconds = dayMilliseconds * 7; 

const assignmentDateConvMS = assignmentDateConv.getTime(); // Convert assignment date to milliseconds
// console.log(assignmentDateConvMS); // to see value which is 1548057600000 ms

const dueDate = new Date(assignmentDateConvMS + sevendayMilliseconds); // Add 7 days to assignment date to get due date 
console.log(dueDate); // Obtain due date which should be Monday January 28, 2019 


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const dueDateMonthName = months[0]; // January 
const dueDateMonthNumber = dueDate.getMonth() + 1; // +1 because January is "0" when getMonth() is executed 
let dueDateMonthNumberFinal = null; // Declare variable that will consist of the month number with padded 0 if needed

if (dueDateMonthNumber >= 0 && dueDateMonthNumber <= 9)
{
    dueDateMonthNumberFinal = `0${dueDateMonthNumber}`; // If month is January - September, pad month number with a 0 in the front. 
}

const dueDateDay = dueDate.getDate(); // This returns the day of the due date which is 28. getDate() is NOT the same as getDay()! 
const dueDateYear = dueDate.getFullYear(); // 2019 

// 10. log this value using console.log
console.log('\n'); // To separate Question 10 answer from Question 8's 
console.log(`<time datetime="${dueDateYear}-${dueDateMonthNumberFinal}-${dueDateDay}">${dueDateMonthName} ${dueDateDay}, ${dueDateYear}</time>`); 