const accountId = 12378
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState

//accountId = 2     //not allowed
accountEmail = "dsd@sd.com"
accountPassword = "242424"
accountCity = "Hyderabad"

console.log(accountId);

/*
prefer not using var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])