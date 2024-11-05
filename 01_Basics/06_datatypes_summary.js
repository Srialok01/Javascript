console.log("------------------- DATATYPES IN JAVASCRIPT ----------------------\n")

console.log("******************* PRIMITIVE DATA TYPE *********************\n");

/*
B - BigInt
B - Boolean
N - Number
N - Null
S - String
S - Symbol
U - Undefined
*/

console.log("--------------------- BigInt ---------------------");
const bigInt = 99932732343423232n
console.log(`The type of variable '${bigInt}' is '${typeof bigInt}'\n `);

console.log("--------------------- Boolean --------------------");
const boolean_val = true
console.log(`The type of variable '${boolean_val}' is '${typeof boolean_val}'\n `);

console.log("--------------------- Number ---------------------");
const number_val = 234343
console.log(`The type of variable '${number_val}' is '${typeof number_val}'\n `);
/*
Note - There is no concept of float in Javascipt, decimal values also fall in Number category
*/

console.log("--------------------- Null -----------------------");
const null_val = null
console.log(`The type of variable '${null_val}' is '${typeof null_val}'\n`);

console.log("--------------------- String ---------------------");
const string_val  = "Alok Srivastav"
console.log(`The type of variable '${string_val}' is '${typeof string_val}' \n`);

console.log("--------------------- Symbol ---------------------");
const Id1  = Symbol(123456)
const Id2  = Symbol(123456)
console.log(Id1);    // Symbol(123456)
console.log(Id2);    // Symbol(123456)
console.log(Id1==Id2)  //false
console.log(typeof Id1)

console.log("--------------------- Undefined ------------------");
let undefined_val ;
console.log(`The type of variable '${undefined_val}' is '${typeof undefined_val}'\n`);


console.log("******************* NON -PRIMITIVE DATA TYPE *********************\n");

/*
Array
Object 
Functions
*/

console.log("---------------------------- ARRAY -----------------------------");

const arr = ["Alok", "Smriti", "Rishu","tanu", 12]

console.log(`The type of variable '${arr}' is '${typeof arr}'\n`);

console.log("---------------------------- OBJECTS -----------------------------");

const obj = {
    "alok": 123,
    "Smriti": 5343
}
console.log(`The type of variable '${obj}' is '${typeof obj}'\n`);


console.log("---------------------------- FUNCTIONS -----------------------------");

const myfunc =function test() {
    console.log("Alok's Function");
    
}

console.log(`The type of function is '${typeof myfunc}'\n`);