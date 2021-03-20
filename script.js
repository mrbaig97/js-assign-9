// Assignment # 9
// JAVASCRIPT

// ALERTS (Chap 1) 
// 1)alert("Welcome to my Website");
// 2)alert("Error! Please enter a valid password.");
// 3)alert("Welcome to JS Land...\n Happy Coding!");
// 4)alert("Welcome to JS Land...");
// 4.a)alert("Happy Coding");

// VARIABLES FOR STRINGS (Chap 2) 
// 1) var username;
// 2) var myName = "Faraz Baig";
// 3.a)var message;
// b)var message = "Hello World";
// c)alert(message);
// 4) var Stuname = "Jhone Doe";
// var age = 15;
// var Qualification = "Certified Mobile Application Development";
// alert(Stuname);
// alert(age +" Years Old");
// alert(Qualification);
// var Pizza = ("Pizza"+"<br />"+"Pizz"+"<br />"+"Piz"+"<br />"+"Pi"+"<br />"+"P");
// document.write(Pizza);
// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)

// var email = "mtajig05@gmail.com";
// alert(email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// var book = "I am trying to learn javascript from the Book A smarter way to learn JavaScript"
// alert(book)

// 8. Write a script to display this in browser through JS

// var write = "Yay! I can write HTML content through Javascript";
// alert(write)

// 9. Store following string in a variable and show in alert and 
// browser through JS

// var design ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(design)



// VARIABLES FOR NUMBERS (Chap 3)

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var myAge = "My age is 23."
// alert(myage);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var visit = "You hae visited this website 29 times."
// alert(visit);

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser

// var birthYear = "My birth year is 1997.\nData type of declared variable is string."
// alert(birthYear);

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitor = "Faraz baig" + "<br>";
// document.write(visitor);
// var title = " blue T-shirt" + "<br>";
// document.write(title)

// var quantity = "12 T-shirts" + "<br>";
// document.write(quantity)

// var order = "Faraz baig ordered 12  blue T-shirt(s) on www.attireware.com"
// document.write(order);

//Assignment # 4 JAVASCRIPT
// VARIABLE NAMES: LEGAL & ILLEGAL (Chap 4)

// 1. Declare 3 variables in one statement.

// var variable1 = "Hello World!",
//     variable2 = true,
//     variable3 = 42;

// 2. Declare 5 legal & 5 illegal variable names.

// var hello = "";
// var _hello = "";

// var $hello = "";
// var hello1 = "";
// var myWorld = "";

// var 123 = "";
// var .hello = "";
// var ?hello = "";
// var @hello = "";
// var &hello = "";

// MATH EXPRESSIONS Chap(6-9)
    //1) var user = 10;
    // document.write("Result :"+"<br/>"+"The value of user is :"+ user+"<br/>"+"<hr/>");
    // ++user; 
    // document.write("The value of ++user is :"+ user+"<br/>"+"Now the value of user is :"+user+"<br/><br/>");
    // user++;
    // document.write("The value of user++ is :"+ 11+"<br/>"+"Now the value of user is :"+user+"<br/><br/>");
    // --user;
    // document.write("The value of --user is :"+ user+"<br/>"+"Now the value of user is :"+user+"<br/><br/>");
    // user--;
    // document.write("The value of user-- is :"+ 11+"<br/>"+"Now the value of user is :"+user);
     
    // 2. What will be the output in variables a, b & result after
    // execution of the following script:
    //  var a = 2;
    // var  b = 1;
    
    // var result = --a - --b + ++b + b--;
    // Explain the output at each stage:
    // --a;
    // --a - --b;
    // --a - --b + ++b;
    // --a - --b + ++b + b--;
    // var a = 2;
    // var b = 1;
    // var result;
    // --a;(Now result = 1)
    // --a - --b;(Now result = 1)
    // --a - --b + ++b;(Now result = 2)
    // --a - --b + ++b + b--;(Now result = 3)
    // var result = --a - --b + ++b + b--;
    // document.write("a is 2"+"<br/>"+"b is 1"+"<br/>"+"result is "+result);

    // 3. Write a program that takes input a name from user &
    // greet the user. 
    // var greetName = prompt("Enter message");
    // alert("Welcome to our Webpage"+"\n"+greetName);
 


    // 5. Write a program to take input a number from user & display
    //  it’s multiplication table on your browser. If user does not enter a new number,
    //  multiplication table of 5 should be displayed by default.
// var user = prompt("Enter no for print table"); 
// n = 1;
// while(n<=10,user<=user)
// {
// document.write(user+ "x" + n + "=" + user*n + "<BR>")
// n++;
//  if (n == 11)
// {
// d++;
// n = 0;
// }
// }

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var totalMarks = 100; 
// var sub1 = prompt("Enter Subject");
//  var sub2 = prompt("Enter Subject");
//  var sub3 = prompt("Enter Subject");
//   var obtained1 = prompt("Enter obtained Marks for sub 1");
//  var obtained2 = prompt("Enter obtained Marks for sub 2");
//  var obtained3 = prompt("Enter obtained Marks for sub 3");
//  var percent1 = (obtained1 / 100) *totalMarks;
// var percent2 = (obtained2 / 100) *totalMarks;
// var percent3 = (obtained3 / 100) *totalMarks;
//  document.write(" <b>Subject</b>"+" <b>Total</b>"+ " <b>Obtained Marks</b>"+" <b>Pecentage</b> "+"<br/>");
//  document.write(sub1+ "  "+"  "+ "  "+totalMarks+ " "+ obtained1+ " "+ percent1+"%"+"<br/>"+sub2+" "+totalMarks+" "+ obtained2+ " "+percent2+"%"+"<br/>"+sub3+" "+totalMarks+" "+ obtained3+ " "+percent3+"%");

// USER INPUT & CONDITIONAL STATEMENT(Chap 9-11)
// 1. Write a program to take “city” name as input from user.
//  If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”.
// var cityName = prompt("Enter city name");
// if(cityName=="karachi"){
// document.write("Welcome to city of lights");
// }
// else if(cityName=="lahore"){
//     document.write("Welcome to city of garden");
// }
// else{
//     document.write("City of peace");
// }
// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir.
//  If the user is female, give the message: Good Morning Ma’am.
// var gender = prompt("Enter gender");
// if(gender=="male"){
//     document.write("Good Morning Sir.");
// }
// else if(gender=="female"){
//     document.write("Good Morning Ma’am.");
// }
// else{
//     alert("please enter correct value");
// }

//3. Write a program to take input color of road traffic 
// signal from the user & show the message according to this table:
// var signal = prompt("Enter color for signal");
// if(signal=="red"){
//     alert("Must Stop")
// }
// else if(signal=="yellow"){
//     alert("Ready to move");
// }
// else if (signal=="green"){
//     alert("Move now")
// }
// else{
//     alert("Error");
// }


// 4. Write a program to take input remaining fuel in car (in litres) from user.
//  If the current fuel is less than 0.25litres,
//  show the message “Please refill the fuel in your car”.

// var fuel = +prompt("Enter fuel limit in litres");
// if(fuel<0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("No need to refill");
// }    

// 5. Run this script, & check whether alert 
// message would be displayed or not.
// Record the outputs.
// var a = 4; 
// if (++a === 5){ alert("given condition for variable a is true"); }//Condition is True
// var b = 82;
//  if (b++ === 83){ alert("given condition for variable b is true"); }//Condition is False
// var c = 12;
//  if (c++ === 13){ alert("condition 1 is true"); } 
// if (c === 13){ alert("condition 2 is true"); }//condition 2 & 4 is Y\True. 
// if (++c < 14){ alert("condition 3 is true"); } 
// if(c === 14){ alert("condition 4 is true"); }  
    	

// var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost; 
//   if (totalCost === laborCost + materialCost){
//        alert("The cost equals"); //This condition is true. 
//     }
//  if (true){
//       alert("True");//this codition is True 
//     }
//  if (false){ 
//       alert("False");
//      }

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); //True 
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b.If the guessed number +1 is the secret number,
// show “Close enough to the correct answer”.
// var secretNum = 5;
// var userNum = +prompt("Guess Secret Number 0-10 ");
// if(userNum==5){
//     alert("“Bingo! Correct answer”.");
// }
// else if(userNum==6){
//     alert("“Close enough to the correct answer”.");
// }
// else{
//     alert("Oops!Wrong Number");
// }

// 8. Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3.
// var count = +prompt("Enter number");
// if(count%3==0){
//     alert("It is divisible by 3");
// }
// else{
//     alert("Not divisible by 3");
// }

// 9. Write a program that checks whether the given 
// input is an even number or an odd number.
// var checkNum = +prompt("Enter num to check Even/Odd");
// if(checkNum%2==0){
//     alert("It's an Even Number")
// }
// else if(checkNum%2==1){
//     alert("It's an Odd Number")
// }
// else{
//     alert("Invalid number");
// }

// 10. Write a program that takes temperature as input
// and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.”
//  d. T > 10 then “OMG! Today’s weather is so Cool.”    
// var temperature = +prompt("Enter Temperature value in degree Celcius");
// if(temperature>40){
//     alert("“It is too hot outside.” ")
// } 
// else if(temperature>30){
//     alert("“The Weather today is Normal.” ");
// }
// else if(temperature>20){
//     alert("“Today’s Weather is cool.”");
// }
// else if(temperature>10){
//     alert("“OMG! Today’s weather is so Cool.”");
// }
// else {
//     alert("Out of range!");
// }

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements.
// Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.
// var input1 = +prompt("Enter first no");
// var input2 = +prompt("Enter second no");
// var operand =  prompt("Enter operand");
// if(operand == "+"){
// document.write(input1+input2);
// }
// if(operand == "-"){
//     document.write(input1-input2);
//     }
//     if(operand == "*"){
//         document.write(input1*input2);
//         }
//         if(operand == "/"){
//             document.write(input1/input2);
//  }

// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chap 12-13)

//1. Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, uppercase letter or lower case letter.
//  (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var character = prompt("Enter character");
//   var charCode = character.charCodeAt();
//   document.write("The ASCII value  of "+character+" = "+charCode+"<br/>");

//   if (charCode>=65 && charCode<=90)
//   {
//     document.write("\nYou have entered a capital letter");
//   }

//   else if (charCode>=97 && charCode<=122)
//   {
//     document.write("\nYou have entered a small letter");
//   }

//   else if (charCode>=47 && charCode<=57)
//   {
//     document.write("\nYou have entered a digit ");
//   }

//   else if (charCode>=0 || charCode>=47|| charCode>=54 || charCode<=64 || charCode>=91 || charCode<=96 || charCode>=123 || charCode<=127)
//   {
//     document.write("\nYou have entered a special character");
//   }

// 2.Write a JavaScript program that accept two integers and display the larger.
//  Also show if the two integers are equal.

// var num1 = +prompt("Enter First number");
// var num2 = +prompt("Enter Second number");	
// if( (num1 >= 25) && (num1 <= 50) && (num2 >= 25 && num2 <= 50) ){
// if(num1 === num2){
// document.write( "Numbers are the same");
// }
// else if (num1 > num2){
// document.write(num1);
// }
// else if(num2 > num1){
// document.write(num2);
// }
// }
// else{
// document.write( "Numbers Out of Range");
// }

// 3.Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var number = prompt("Enter Number?")
// if(number > 0)
//         {
//             document.write(number+" is a positive number");
//         }
//         else if(number < 0)
//         {
//             document.write(number+" is a negative number");
//         }
//         else
//         {
//             document.write(number+" is neither positive nor negative");
//         }

// 4. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise
//  var vowel = prompt("Enter Character to check vowel?");
//  vowel1= vowel.toLowerCase();
//  if (vowel1 == "a"|| vowel1 == "e"|| vowel1 == "i"|| vowel1 == "o"|| vowel1 == "u"){
//      alert(vowel1+" is a vowel");
//  }
//  else{
//      alert("Not a vowel");
//  }
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered matches the original password”.
//  Show “Incorrect password” otherwise.

// var storePassword = prompt('Set password');
// var askPassword = prompt("Enter your password");
// if(storePassword==askPassword){
//     alert("“Correct! The password you entered matches the original password”.");
// }
// else{
//     alert("“Incorrect password”");
// }
// 6. This if/else statement does not work. Try to fix it:
//  var greeting;
//   var hour = 13; 
// if (hour < 18) {//adiing { 
//      greeting = "Good day";
//      alert(greeting);//addition
// }//adding }
//  else {
//      greeting = "Good evening";
//      alert(greeting); 
//     }

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
//  Implement the following case using if, else & else if statements

// var time = prompt("Enter hours");
// if(time==1900){
//     alert("Its 7pm");
//     }
// else if(time>=0000 && time<1200){
//     alert("Good Morning");
// }
// else if(time>=1200 && time<1700){
//     alert("Good Afternoon");
// }
// else if(time>=1700 && time<2100){
//     alert("Good Evening");
// }
// else if(time>=2100 && time<2359){
//     alert("Good Night");
// }
// else{
//     alert("Invalid Input");
// }

// ARRAYS (Chap 14-16)

// 1. Declare an empty array using JS literal notation to store student names in future.
// var studentNames = [];
//2. Declare an empty array using JS object notation to store student names in future.
// var studentsNane = newArray({});
// 3.Declare and initialize a strings array.
// var string = ["Faraz baig"];
// 4. Declare and initialize a numbers array.
// var number = [1,2,3,4,5,6,7,8,9,0];
// 5. Declare and initialize a boolean array.
// var boolean = [true];
// 6. Declare and initialize a mixed array.
// var mixArr = ["faraz",23,true];
// 7. Declare and Initialize an array and store available education qualifications in Pakistan
//  (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
//  Show the listed qualifications in your browser like:
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write('<h2>'+"Qualifications :"+'</h2>'+'<ol><li>'+qualifications.join('</li><li>')+'</li></ol>');

// 9. Initialize an array with color names. Display the array elements in your browser
// var colorNames = ["red",'pink','yellow','green','black','blue','brown','purple'];
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// var addColor = prompt("Enter color name you wants to add in start");
// colorNames.unshift(addColor);
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
//  Display the updated array in your browser.
// var addColor = prompt("Enter color name you wants to add in last");
// colorNames.push(addColor);
// c. Add two more color to the beginning of the array.
//  Display the updated array in your browser.
// colorNames.unshift("white","grey");
// d. Delete the first color in the array. Display the updated array in your browser.
// colorNames.shift();
// e. Delete the last color in the array. Display the updated array in your browser.
// colorNames.pop();
// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. 
//  Display the updated array in your browser.
// var addColor = prompt("Enter color name you wants to add in desire index");
// colorNames.splice(3,0,"lightblue");
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. 
//  Display the updated array in your browser.
// var addColor = prompt("Enter color name you wants to delete in desire index");
// colorNames.splice(3,2,0);

