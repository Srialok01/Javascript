
const myArray = [0,1,3,'Alok']
console.log(myArray[2]);

// 2nd Method to declare an array
const myHeros = new Array('John wick','Iron Man','Shaktimaan')
console.log(myHeros[0]);
console.log(typeof myHeros);

// Array methods
console.log("---------PUSH------------");

console.log(myArray);  // [0,1,3,'Alok']
myArray.push(9)   
console.log(myArray);  // [0,1,3,'Alok',9]

console.log("---------POP------------");
console.log(myArray);  // [0,1,3,'Alok',9]
myArray.pop()
console.log(myArray);  // [0,1,3,'Alok']