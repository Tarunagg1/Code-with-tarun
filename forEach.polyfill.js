// 👉 "Code-with-tarun" - 023#javascriptDailyEpisode3
// 😀 Create your custom forEach function called "myCustomforEach"

// 👉 Array.prototype.forEach and Its Polyfill
// Array.prototype.forEach is a higher order function that iterates through each element of an array and executes a callback 
// function once for each element.


// 💡forEach function takes a callback function as an argument, This Callback function takes 3 parameters current element, current index, and array, Callback function runs for each element of an array

// 💡Note - 💡forEach modify the original array.

// 💡Some forEach Use cases
// 1. Iterating over Array Elements: The primary use of forEach() is to iterate over each element of an array and perform some action or operation on each element.

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => {
//   console.log(num);
// });

// 2. Modifying Array Elements: Although forEach() does not return a new array, it allows you to modify the elements of the existing array within the iteration. You can directly modify the values of the array elements.

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, index, array) => {
//   array[index] = num * 2;
// });
// console.log(numbers);

// 3. Working with DOM Elements: forEach() is commonly used to iterate over a collection of DOM elements and perform operations or event bindings on each element.

// const elements = document.querySelectorAll('.my-element');
// elements.forEach((element) => {
//   element.classList.add('active');
// });

// 4. Asynchronous Operations: While forEach() itself is synchronous, it can be used in combination with asynchronous operations inside the callback function. For example, you can make asynchronous API calls or perform other asynchronous tasks for each element.

// const urls = ['https://api.example.com/1', 'https://api.example.com/2', 'https://api.example.com/3'];
// urls.forEach((url) => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });


// GitHub repo name - "Code-with-tarun"
// GitHub repo code link - https://github.com/Tarunagg1/Code-with-tarun/blob/master/forEach.polyfill.js


// Wait, It's not the end, We can create our own custom forEach ( Polyfill of forEach ) Check the code snippet below.

// Please share other use cases of forEach function in the comment section,

// Hit #like, #share, and follow Tarun aggarwal for daily javaScript & coding tips.

// #javascript #content #interviewquestions #webdevelopment
// #developer #community #content #interview #webdeveloper #coding

// Happy coding!!

let students = [
    { name: "Tarun", city: "delhi" },
    { name: "Arun", city: "haryana" },
    { name: "John", city: "noida" },
    { name: "Jenny", city: "usa" },
    { name: "joceps", city: "uk" }
]

const displayData = ({ name }, index, array) => {
    console.log(name);
};

students.forEach(displayData);

// Create Custom own Polyfill of forEach
Array.prototype.myCustomforEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
}

students.myCustomforEach(displayData);

/* Output
    Tarun
    Arun
    John
    Jenny
    joceps
*/

