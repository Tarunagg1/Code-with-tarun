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
