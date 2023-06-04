// 👉 "Code-with-tarun" - 02 #javascriptDailyEpisode2
// 😀 Create your custom map function called "ourCustomMap"

// 👉 Array.prototype.map
//  and Its Polyfill
// Array.prototype.map
//  is a function in javascript that iterates each element of an array and can modify each element of an array.
// it returns new array as an arguments

// 💡map function takes a callback function as an argument, This Callback function takes 3 parameters current element, current index, and array, Callback function runs for each element of an array

// 💡Note - map does not modify the original array, insted Always returns a new copy of array.

// 💡Some map Use cases
// 1. Extracting Properties: When working with an array of objects, you can use map() to extract specific properties from each object and create a new array containing only those properties.

// const users = [
//  { name: 'Alice', age: 25 },
//  { name: 'Bob', age: 30 },
//  { name: 'Charlie', age: 35 }
// ];
// const userNames = users.map
// ((user) => {
//  return user.name
// ;
// });
// console.log(userNames);

// 2. Parsing Data: map() can be useful for parsing and reformatting data. For example, if you have an array of strings representing dates in a specific format, you can use map() to convert them into JavaScript Date objects.

// const dateStrings = ['2022-01-01', '2022-02-01', '2022-03-01'];
// const dates = dateStrings.map
// ((dateString) => {
//  return new Date(dateString);
// });
// console.log(dates);

// 3. Chaining with Other Array Methods: map() can be used in combination with other array methods like filter() and reduce() to perform complex data transformations.

// const numbers = [1, 2, 3, 4, 5];
// const sumOfEvenSquares = numbers
//  .filter((num) => num % 2 === 0)
//  .map((num) => num * num)
//  .reduce((acc, curr) => acc + curr, 0);
// console.log(sumOfEvenSquares);
// // Output: 20 (2^2 + 4^2 = 4 + 16 = 20)

// GitHub repo name - "Code-with-tarun"
// GitHub repo code link - https://lnkd.in/db_NZC8s


// Wait, It's not the end, We can create our own custom map ( Polyfill of map ) Check the code snippet below.

// Please share other use cases of map function in the comment section,

// Hit #like, #share, and follow Tarun aggarwal for daily javaScript & coding tips.

// #javascript #content #interviewquestions #webdevelopment
// #developer #community #content #interview #webdeveloper #coding

// Happy coding!!

const numbers = [1, 2, 3, 4, 5];

const cube = (element) => {
    return element ** 2;
};

const cubeNumbers = numbers.map(cube);
console.log("cubeNumbers", cubeNumbers); // [ 1, 4, 9, 16, 25 ]


// Create Custom own Polyfill of map
Array.prototype.ourCustomMap = function (callback) {
    //Here this is pointing to numbers array here
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        temp.push(this[index], index, this);
    }
    return temp;
};


const doubleNumbersCustom = numbers.ourCustomMap(cube);
console.log("cubeNumbers", cubeNumbers); // [ 1, 4, 9, 16, 25 ]
