// 👉 Question-1 
function GUESSQ1() {
    const ShowData = {
        name: "Tarun",
        printName1: function () {
            console.log("myname1", this.name);
        },
        printName2: () => {
            console.log("myname2", this.name);
        },
    };
    ShowData.printName1();
    ShowData.printName2();
}

GUESSQ1();

// 💡A) myname1 Tarun, myname2 undefined
// 😀B) myname1, myname2 Tarun
// 👍C) myname1 Tarun, myname2 Tarun
// 💖D) myname1 Tarun, myname2


// 👉 Question-2
