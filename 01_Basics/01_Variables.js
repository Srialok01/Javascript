const accountNo = 1234563
let accountEmail = "alok.srivastav@fakeemail.com"
/*
Prefer not to use var, because of issue in block scope and functional scope
*/

var accountPassword = "ThisisP@ssword"
address = "Ghazipur"
console.log(typeof address)

let accountStatus;
console.table([accountNo,accountEmail,accountPassword,address,accountStatus])

console.log("Now changing values");

// accountNo = 5432133  this is not allowed
console.log(accountNo);
accountEmail ="alok.srivastav@correctemail.com"
accountPassword = "UpdatedP@ssw0rd"
address = "Ghazipur"
accountStatus = "active"


console.table([accountNo,accountEmail,accountPassword,address,accountStatus])
