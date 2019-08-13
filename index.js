
var myArray = [12, 32, 44];

myArray.push(23);
myArray.push(45);
// output: 12, 32, 44

function addToArray(number){
    myArray.push(number);
}

// add 100 to end of array
addToArray(100);

console.log(myArray)