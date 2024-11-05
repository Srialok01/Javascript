console.log("------------ COMPARISONS IN JAVASCRIPT -------------------");
console.log("\n 1. ARITHMETIC COMPARISONS\n")
console.log(2>2);  //false 
console.log(3>2);  //true
console.log(3>=2); //true
console.log(3==2); //false
console.log(3!=2); //true
console.log("---------------------------------------------------")

console.log("\n 2. COMPARISONS WITH TWO DIFFERENT TYPES \n")
console.log("2">1); // true - as it automatically converts string to number
console.log("02">2) //false 
console.log("---------------------------------------------------")

console.log("\n 3. COMPARISONS WITH NULL TYPES \n")
console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0); //true
console.log("---------------------------------------------------")

/*
Note - The reason is that an equality check == and comparison >,<,=<,=>, works differently
Comparisons convert null to a number, treating it as 0.
Hence null >=0 is true  and nul>0 is false
*/

console.log("\n 4. COMPARISONS WITH UNDEFINED TYPES \n")
console.log(undefined>0);  //false
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log("---------------------------------------------------")

console.log("\n 5. COMPARISONS WITH UNDEFINED TYPES \n")
console.log(undefined>0);  //false
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log("---------------------------------------------------")

console.log("\n 6. STRICT EQUALITY CHECK \n")
console.log("2"==2);  //true
console.log("2"===2); //false

console.log("---------------------------------------------------")