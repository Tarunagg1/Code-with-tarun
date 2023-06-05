// 💡 "Code-with-tarun" - 05 #javascriptDailyEpisode5
// 👉 Closures, Function along with its lexical scope bundled together forms a closure. In simple words, Each and every function in javascript has access to its outer function's scope.
// 👉 Inner function can access all the variables and functions of its outer function even after the execution context of the outer function has been completely removed from the call stack.

// 👉 Explanation
// The innerFunction has access to the outerValue variable due to the closure. It can access and use the outerValue even after the outerFunction has finished executing.


// 💡Uses of Closures :-

// 👉1) Module Pattern: Closures form the foundation of the module pattern, which helps create encapsulated modules with private data and public interfaces. The closure encapsulates the private variables and functions, while exposing only the desired public methods or variables.
// 👉2) Memoization :- Memoizing the result of the function and if later on the same function is called with the same arguments then return memoized result instead of executing the whole function again.
// 👉3) Encapsulation and Data Privacy: Closures allow you to create private variables and functions, restricting access to them from outside the closure


// 💡Advantages of Closures :-
// 👉Data hiding, Encapsulation, variables can not be accessed or modified directly from outside the functions

// function Student() {
//   let name = "Tarun";

//   this.getName = () => {
//     return name;
//   };

//   this.setName = () => {
//     name = "Arun";
//   };
// }

// const tarun = new Data();
// console.log(tarun.getName()); // tarun
// jayesh.setName();
// console.log(tarun.getName()); // Arun

// 💡Disadvantages of Closures
// 👉 Overconsumption of memory.
// 👉 Variables are not Garbage collected.
// 👉 Memory leaks.



// GitHub repo name - "Code-with-tarun"
// GitHub repo code link - https://github.com/Tarunagg1/Code-with-tarun/blob/master/map.polyfill.js

// Please share other use cases of Closures function in the comment section,

// Hit #like, #share, and follow Tarun aggarwal for daily javaScript codes & tips.

// #javascript #content #interviewquestions #webdevelopment #codewithtarun #cwt
// #developer #community #content #interview #webdeveloper #coding

// Happy coding!!


function outerFunction(outerValue) {
    function innerFunction(innerValue) {
        console.log("Outer value:", outerValue);
        console.log("Inner value:", innerValue);
    }

    return innerFunction;
}

// Create closures
var closure1 = outerFunction("Hello");
var closure2 = outerFunction("Hi");

// Invoke the closures
closure1("World");
// Output: Outer value: Hello, Inner value: World
closure2("OpenAI");
// Output: Outer value: Hi, Inner value: OpenAI