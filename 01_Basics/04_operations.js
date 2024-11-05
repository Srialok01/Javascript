console.log("------------ OPERATIONS IN JAVASCRIPT -------------------");
console.log("\n 1. ARITHMETIC OPERATIONS\n")

console.log(2+2); //4 
console.log(3-2); //1
console.log(3*2); //6
console.log(3**2);//9
console.log(7/2); //3.5
console.log(21%4) //1
console.log("---------------------------------------------------")

console.log("\n 2. CONCATENATION TWO STRINGS \n")
let str1 = "Alok"
let str2 = " Srivastav"
console.log(str1+str2)

let str3 = str1+str2
console.log(str3)

let str4 = str1.concat(str2)
console.log(str4);
console.log("---------------------------------------------------")


console.log("\n 2. CONCATENATION OF STRING AND NUMBER \n")
let val1= "1"
let val2 = 5
console.log(val1+val2)       // 15

console.log(val1+val2+9)     // 159

console.log(9+2+val1+val2)    // 1115

/*
Note- This happens because javascript evaluates "type" of first operand and perform operations accordingly
*/ 

console.log("---------------------------------------------------")

console.log (+true) //1
console.log(+"") //0

/*
Note - This happens in Javascript because + coerces booleans to integers, with true becoming 1 and false becoming 0.
*/