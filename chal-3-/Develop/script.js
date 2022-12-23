// Assignment code here

function promptMe(){
   var passwordIncludeUpper= true;
   var passwordCriteriaNumeric= true;
   var passwordCriteriaSpecial= true;
   var upperLower = "QWERTYUIOPASDFGHJKLZXCVBVNMqwertyuiopasdfghjklzxcvbnm";
   var lower = "qwertyuiopasdfghjklzxcvbnm";
   var numeric = "1234567890";
   var special ="!@#$%^&*?"
   var passwordLength = 6;
   var password = "";

{var userChoice = prompt("Would you like to include UPPER and LOWER case letters in your passowrd? (input y/n)");
if (userChoice === "y") {
alert ("UPPPER and LOWER Case letters will be used in your password."); }
else {
var passwordIncludeUpper = false;
("UPPPER and LOWER Case letters will NOT be used in your password.");}}

{var userChoice = prompt("Would you like to include NUMBERS in your password? (input y/n)"); 
if (userChoice === "y") {
alert ("NUMBERS will be used in your password.");}
else {
var passwordCriteriaNumeric = false;
alert("NUMBERS will NOT be used in your password.");}}

{var userChoice = prompt("Would you like to include SPECIAL characters in your password? (input y/n)");
if (userChoice === "y") {
alert ("SPECIAL characters will be used in your password.");}
else {
 var passwordCriteriaSpecial = false; 
 alert ("SPECIAL characters will NOT be used in your password.");}}
 
 if (passwordIncludeUpper === true){
   for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * upperLower.length)
      password += upperLower.substring(randomNumber, randomNumber +1)}}
if (passwordIncludeUpper === false){
   for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * lower.length)
      password += lower.substring(randomNumber, randomNumber +1)}}
if (passwordCriteriaNumeric === true){
   for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * numeric.length)
      password += numeric.substring(randomNumber, randomNumber +1)}}
if (passwordCriteriaSpecial === true){
   for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * special.length)
      password += special.substring(randomNumber, randomNumber +1)}}
      random.shuffle(password)
      alert(password);
return}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// function writePassword() {
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//                                                                                    ATTEMPT 1
// var passwordCriteria = {
//   passwordIncludeUpper: true, 
//   passwordCriteriaNumeric: true,
//   passwordCriteriaSpecial: true,
// }

// var passwordCharacterLists = {
//   alphabetLower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
//   alphabetAll: ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
//   numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//   specialCharacters: ['!', '@', '#', '$', '%', '^' ,'&' ,'*'],
// }

// function promptMe(){

//   {var userChoice = prompt("Would you like to include UPPER and LOWER case letters in your passowrd? (input y/n)");
//   if (userChoice === "y") {
//   alert ("UPPPER and LOWER Case letters will be used in your password."); }
//   else {
//   passwordCriteria.passwordIncludeUpper = false
//   ("UPPPER and LOWER Case letters will NOT be used in your password.");}}

//   {var userChoice = prompt("Would you like to include NUMBERS in your password? (input y/n)"); 
//   if (userChoice === "y") {
//   alert ("NUMBERS will be used in your password.");}
//   else {
//   passwordCriteria.passwordCriteriaNumeric = false
//   alert("NUMBERS will NOT be used in your password.");}}

//   {var userChoice = prompt("Would you like to include SPECIAL characters in your password? (input y/n)");
//   if (userChoice === "y") {
//   alert ("SPECIAL characters will be used in your password.");}
//   else {
//   passwordCriteria.passwordCriteriaSpecial = false 
//   alert ("SPECIAL characters will NOT be used in your password.");}}
  
// }
// var passwordString = '';

// function generatePassword() 
// {
//   if (passwordCriteria.passwordIncludeUpper === true){
//   var passwordStringLower = (passwordCharacterLists.alphabetLower[new Random().nextInt(passwordCharacterLists.alphabetLower.length)])
//   passwordString = passwordStringLower}
//    else {
//   var passwordStringAll = (passwordCharacterLists.alphabetUpper[new Random().nextInt(passwordCharacterLists.alphabetUpper.length)])
//   passwordString = passwordStringAll}

//   if (passwordCriteria.passwordCriteriaNumeric === true){
//   var passwordStringNumeric = (passwordCharacterLists.numbers[new Random().nextInt(passwordCharacterLists.numbers.length)])
//   passwordString = passwordString + passwordStringNumeric}

//   if (passwordCriteria.passwordCriteriaNumeric === true){
//   var passwordStringSpecial = (passwordCharacterLists.specialCharacters[new Random().nextInt(passwordCharacterLists.specialCharacters.length)])
//   passwordString = passwordString + passwordStringSpecial}
//   return passwordString
// }





//                                                                                 ATTEMPT 2
// generatePassword(String[args]) {

//      String alphabetLower = "qwertyuiopasdfghjklzxcvbnm"
//      String alphabetUpper = "QWERTYUIOPASDFGHJKLZXCVBNM"
//      String numbers = "1234567890"
//      String specialChars = "!@#$%^&*"

//      String alphaNumeric = alphabetUpper + alphabetLower + numbers + specialChars;
//      CharacterData sb = new StringbBuilder();
//      Random random = new Random();
//      int length = 10;
//      for(int i = 0; i < length; i++){
//       var index = random.nextInt(alphaNumeric.length());
//       var randomChar = alphaNumeric.charAt(index)
//       sb.append(randomChar);
//     }
//   String randomString= sb.toString();
//   return randomString
//   }
// console.log(main)
 //                                                                           attempt 3
//  function generatePassword(){
//   function generateUpper(length){
//   if (passwordCriteria.passwordIncludeUpper = true){
//     myString = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         myString += alphaUpper.charAt(Math.floor(Math.random() * charactersLength/2));
//         myString += alphaLower.charAt(Math.floor(Math.random() * charactersLength/2));}
//         return result1}}
//   function generateLower(length){
//   if (passwordCriteria.passwordIncludeUpper != true){
//     myString = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         myString += alphaLower.charAt(Math.floor(Math.random() * charactersLength));}
//         return result2}}
//   function generateNumeric(length){
//   if (passwordCriteria.alphaNumeric = true){
//     myString1 = '';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//       myString1 += alphaNumeric.charAt(Math.floor(Math.random() * charactersLength));}
//       return myString}}
//   function generateSpecChar(length){
//   if (passwordCriteria.alphaSpecChar = true){
//     myString2 = ''
//     const charactersLength = charcters.length;
//     for ( let i = 0; i < length; i ++ ) {
//       myString2 += alphaSpecChar.charAt(Math.floor(Math.random() * charactersLength));}
//       return myString2}}
//       var myString = myString1 + myString2;
//     return myString}
  
// function promptMe(){
//    var alphaLower = ["qwertyuiopasdfghjklzxcvbnm"]
//    var alphaUpper = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
//    var alphaNumeric = ["1234567890"]
//    var alphaSpecChar = ["!@#$%&*?+"]
//    var passwordCriteria = {
//    passwordIncludeUpper: true, 
//    passwordCriteriaNumeric: true,
//    passwordCriteriaSpecial: true,}