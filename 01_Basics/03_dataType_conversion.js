let age = 32
console.log(typeof age); // This will result number

console.log("------------  Converting Valid string to Number -----------------------")
/* 
 Input = "32" - string format
 Output = 32 - number format
*/

const age2 = "32"
console.log(`Entered value is '${age2}' and its type is  '${typeof age2}'`);

let value_in_num = Number(age2)
console.log(`Post converting to number the value is '${value_in_num}' and its type is '${typeof value_in_num}'\n`);

console.log("------------  Converting Invalid string to Number -----------------------")
/* 
 Input = "32abc" - string format
 Output = Nan - number format
*/
const age3 = "32abc"
console.log(`Entered value is '${age3}' and its type is  '${typeof age3}'`);

let value_in_num3 = Number(age3)
console.log(`Post converting to number the value is '${value_in_num3}' and its type is '${typeof value_in_num3}'\n`);


console.log("------------  Converting null to Number -----------------------")
/* 
 Input = null - object format
 Output = 0 - number format
*/
const age4 = null
console.log(`Entered value is '${age4}' and its type is  '${typeof age4}'`);

let value_in_num4 = Number(age4)
console.log(`Post converting to number the value is '${value_in_num4}' and its type is '${typeof value_in_num4}'\n`);



console.log("------------  Converting undefined to Number -----------------------")
/* 
 Input =  undefined- undefined format
 Output = Nan - number format
*/
const age5 = undefined
console.log(`Entered value is '${age5}' and its type is  '${typeof age5}'`);

let value_in_num5 = Number(age5)
console.log(`Post converting to number the value is '${value_in_num5}' and its type is '${typeof value_in_num5}'\n`);


console.log("------------  Converting boolean to Number ----------------------")
/* 
 Input =  true -boolean format
 Output = 1 - number format
*/
const age6 = true
console.log(`Entered value is '${age6}' and its type is  '${typeof age6}'`);

let value_in_num6 = Number(age6)
console.log(`Post converting to number the value is '${value_in_num6}' and its type is '${typeof value_in_num6}'\n`);


console.log("------------  Converting valid Number to Boolean ----------------------")

/*
Input  = 1 - number format
 Output =  true -boolean format
 
*/
const is_available = 1
console.log(`Entered value is '${is_available}' and its type is  '${typeof is_available}'`);

let value_in_is_available = Boolean(is_available)
console.log(`Post converting to number the value is '${value_in_is_available}' and its type is '${typeof value_in_is_available}'\n`);

console.log("------------  Converting blank to Boolean ----------------------")

/*
Input  = "" - string format
 Output =  false -boolean format
 
*/
const is_available1 = ""
console.log(`Entered value is '${is_available1}' and its type is  '${typeof is_available1}'`);

let value_in_is_available1 = Boolean(is_available1)
console.log(`Post converting to number the value is '${value_in_is_available1}' and its type is '${typeof value_in_is_available1}'\n`);


console.log("------------  Converting valid to Boolean ----------------------")

/*
Input  = "alok" - string format
 Output =  true -boolean format
 
*/
const is_available2 = "alok"
console.log(`Entered value is '${is_available2}' and its type is  '${typeof is_available2}'`);

let value_in_is_available2 = Boolean(is_available2)
console.log(`Post converting to number the value is '${value_in_is_available2}' and its type is '${typeof value_in_is_available2}'\n`);