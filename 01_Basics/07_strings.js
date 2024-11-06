
console.log("------------- STRINGS IN JAVASCRIPT -------------");

const name = "alok"

console.log(typeof name);

const repoCount = 10

console.log(name+repoCount)

console.log("------------ Using Backticks in Strings '~' --------------");

console.log(` Hello This is '${name}' and the Github repo count is '${repoCount}'`);

console.log('------------- ANOTHER METHOD OF STRINGS DECLARATION------------');

const my_name = new String('Alok-Srivastav')

console.log(my_name) //[String: 'Alok-Srivastav']
console.log(typeof my_name) //object

console.log(my_name[0]); //A

console.log(my_name.length) //14

console.log(my_name.toUpperCase()) //ALOK-SRIVASTAV

console.log(my_name.charAt(3)); //k

console.log(my_name.indexOf('k')); //3

// substring

const newstring = my_name.substring(1,4)
console.log(newstring); //lok

//  slice

const another_string = my_name.slice(-9,14)
// '-' denotes reverse order checking
console.log(another_string); //Srivastav


//trim - to remove spaces on white spaces and line terminators,not in the middle space

const new_name = "      Alok Tanu     "
console.log(new_name.trim())  //Alok Tanu

//replace - to replace a value 

const url = "https://alok.srivastav.in/Alok%20Srivastav"

new_url = url.replace("%20", '-')
console.log(new_url);


//includes - to check if value exists or not

console.log(url.includes('alok')) //true
console.log(url.includes('tanu')) //false


// split - convert string to an array 
const another_name = new String('tanu-Alok-Srivastav')
console.log(another_name.split('-'))
