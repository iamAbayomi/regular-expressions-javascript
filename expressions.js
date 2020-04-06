let username = "JackOfAllTrades";
let userCheck = /^\d\w+/gi; // Change this line
let result = userCheck.test(username);
let word = username.match(userCheck);

console.log(word);

window.alert(word);