// 👉 "Code-with-tarun" - 07 #javascriptDailyEpisode7

// ⭐ You might have thought this sometimes ⭐.
// Here are the differences between .map() method and .forEach() method of #javascript .
// Most asked interview questions #interview


// 1. Return Value:

// map: Returns a new array with the transformed elements based on the provided function.
// forEach: Does not return any value. it only performs an action on each element. it returns undefined

// Output:
// const myArr = [1, 2, 3, 4, 5, 6];
// myArr.forEach(x => x * x);
// // Output: - undefined

// myArr.forEach(x => x * x);
// // Output: -[1, 4, 9, 16, 25, 36]



// 2. Ability to Chain others methods:

// map: Can be easily chained with other array methods, allowing for method chaining to perform multiple transformations or operations in a concise manner.
// forEach: Does not easily lend itself to method chaining since it does not return a value.

// const myArr = [1, 2, 3, 4, 5, 6];
// myArr.forEach(x => x * x).reduce((acc, value) => acc + value, 0);
// // Output: - TypeError: Cannot read properties of undefined (reading 'reduce')

// myArr.map(x => x * x).reduce((acc, value) => acc + value, 0);
// // Output: - 91


// 3. Immutability

// map: Creates and returns a new Array, leaving the original Array unchanged.
// forEach: Operates on each element of the original Array directly without creating a new Array.


// 4. Purpose:

// map: Used to transform each element of a collection by applying a given function and returns a new collection with the transformed elements.
// forEach: Used to iterate over a collection and perform some action on each element, without returning a new collection.


// conclusion:

// ultimately, the choice between map and forEach depends on the specific requirements of your code and the intended purpose. If you need to transform elements and create a new collection, map is a good choice. If you simply want to iterate over the collection and perform actions, forEach is more suitable.


// GitHub repo name - "Code-with-tarun"

// GitHub repo code link - https://github.com/Tarunagg1/Code-with-tarun/blob/master/map.polyfill.js

// Please share other use cases of forEach & Map function in the comment section,

// Hit #like, #share, and follow Tarun aggarwal for daily javaScript & coding tips.

// #javascript #content #interviewquestions #webdevelopment
// #developer #community #content #interview #webdeveloper #coding

// Happy coding!!


// return value

// const myArr = [1, 2, 3, 4, 5, 6];
// myArr.forEach(x => x * x);
// Output: - undefined

// myArr.forEach(x => x * x);
// Output: -[1, 4, 9, 16, 25, 36]


const myArr = [1, 2, 3, 4, 5, 6];
myArr.forEach(x => x * x).reduce((acc, value) => acc + value, 0);
// Output: - TypeError: Cannot read properties of undefined (reading 'reduce')

myArr.map(x => x * x).reduce((acc, value) => acc + value, 0);
// Output: - 91