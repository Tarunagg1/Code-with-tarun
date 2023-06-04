/*
👉 "Code-with-tarun" - 04 #javascriptDailyEpisode4
👉 Singleton Design Pattern Explanation & Impplementaton By Letest Approach ES6

The singleton design pattern is used in scenarios when we need exactly one instance of an interface (class or function).
In a singleton design pattern, only one object is created for each interface (class or function) and the same object is returned every time when called.

singleton interface (class or function) ensures that it creates only one instance, provides a global access point to the state, 
and makes sure that the instance is only created the first time.


💡Use Cases :-
👉1) Configuration object across the system.
👉2)  The Singleton pattern allows you to control the creation process.
👉3) The Singleton provides a single global access point to the instance, allowing other parts of the code to easily access and use it.
👉4) Implement caching or logging mechanisms
👉5) Redux in React uses SDP to create one single immutable global object.
👉6) Ensure thread safety in multi-threaded environments: 


GitHub repo name - "Code-with-tarun"
GitHub repo code link - https://github.com/Tarunagg1/Code-with-tarun/blob/master/map.polyfill.js

Wait, It's not the end, We can create our own custom map ( Polyfill of map ) Check the code snippet below.

Please share other use cases of map function in the comment section,

Hit #like, #share, and follow Tarun aggarwal for daily javaScript codes & tips.

#javascript #designpattern #content #interviewquestions #webdevelopment #codewithtarun #cwt
#developer #community #content #interview #webdeveloper #coding

Happy coding!!

*/




class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }

        // Initialization code goes here
        this.privateVariable = "Heyy Tarun, I am private";
        Logger.instance = this;
    }

    publicMethod() {
        console.log("This is a public method");
    }

    getPrivateVariableData() {
        return this.privateVariable;
    }

    setPrivateVariableData(value) {
        this.privateVariable = value;
    }
}

// Usage:
const singletonObject1 = new Logger();
const singletonObject2 = new Logger();

console.log(singletonObject1 === singletonObject2); // Output: true

singletonObject1.setPrivateVariableData("Tarun updating private variable");
console.log(singletonObject1.getPrivateVariableData()); // Output: "Tarun updating private variable"

