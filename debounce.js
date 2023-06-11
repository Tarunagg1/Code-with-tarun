// 👉 "Code-with-tarun" - 09 #javascriptDailyEpisode9
// 👉 Debouncing Implementation
// Debouncing is a technique used to improve the performance of applications by reducing the rate of functions call

// 👉 If the function is getting called continuously, We can delay the function call for some time 
// with the help of debouncing to optimize the performance of applications

// 💡Let's take an example search input value-

// 💡Other use cases :-
// 👉 Continous button click event function call can be delay.
// 👉 Resize of window event function call can be delay.
// 👉 discard unnecessary api calls on server


// GitHub repo name - "Code-with-tarun"
// GitHub repo code link - https://github.com/Tarunagg1/Code-with-tarun/blob/master/map.polyfill.js


// Please share other use cases of dbounde in the comment section,

// Hit #like, #share, and follow Tarun aggarwal for daily javaScript & coding tips.

// #javascript #content #interviewquestions #webdevelopment #codewithtarun #cwt
// #developer #community #content #interview #webdeveloper #coding
// #dbounde

// Happy coding!!


let count = 0;

const myDebouce = (cb, d) => {
    let timer;
    return (...args) => {
        if (timer) clearinterval(timer);
        timer = setInterval(() => {
            return cb(...args);
        }, d);
    }
}

const debounceCount = myDebouce(()=>{
    count++;
    console.log('click happer');
},800)



setInterval(() => {
    debounceCount()
}, 1000);
