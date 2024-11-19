
const myArray = [0,1,3,'Alok']
// console.log(myArray[2]);

// 2nd Method to declare an array
const myHeros = new Array('John wick','Iron Man','Shaktimaan')
// console.log(myHeros[0]);
// console.log(typeof myHeros);

// Array methods
// console.log("---------PUSH------------");

// console.log(myArray);  // [0,1,3,'Alok']
// myArray.push(9)   
// console.log(myArray);  // [0,1,3,'Alok',9]

// console.log("---------POP------------");
// console.log(myArray);  // [0,1,3,'Alok',9]
// myArray.pop()
// console.log(myArray);  // [0,1,3,'Alok']

// console.log("---------UNSHIFT------------");
// console.log(myArray);  // [0,1,3,'Alok']
// myArray.unshift(5)
// console.log(myArray);  // [5,0,1,3,'Alok']

// console.log("---------SHIFT------------");
// console.log(myArray);  // [5,1,3,'Alok']
// myArray.shift(5)
// console.log(myArray);  // [0,1,3,'Alok']

// console.log("---------INCLUDES------------");
// console.log(myArray);  // [0,1,3,'Alok']
// console.log(myArray.includes(4))     //false
// console.log(myArray.includes(3));   // true

// console.log("---------INDEX------------");
// console.log(myArray);  // [0,1,3,'Alok']
// console.log(myArray.indexOf(4))     // -1
// console.log(myArray.indexOf(3));   // 2


// const newArr = myArray.join()

// console.log(myArray); //[ 0, 1, 3, 'Alok' ]
// console.log(typeof myArray); //object



// console.log(newArr); // 0,1,3,Alok
// console.log(typeof newArr); //string 

// const mynewArr1 = myArray.slice(1,3)
// console.log("Original Array",myArray)      // Original Array [ 0, 1, 3, 'Alok' ]
// console.log(mynewArr1)    // [1,3]
// console.log("Array after Slicing",myArray)   // Array after Slicing [ 0, 1, 3, 'Alok' ]



// console.log("Original Array",myArray) // Original Array [ 0, 1, 3, 'Alok' ]
// const mynewArr2 = myArray.splice(1,3)     
// console.log(mynewArr2)    // [ 1, 3, 'Alok' ]
// console.log("Array after splicing",mynewArr2)   // Array after Slicing [ 1, 3, 'Alok' ]