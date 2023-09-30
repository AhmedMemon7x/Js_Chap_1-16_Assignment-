// Chapter 1 (Alert)
// Task 1
// alert("Welcome to the page")

// Task 2
// alert("Error! Please enter a valid password.")

// Task 3
// alert("Welcome to JS Land.... \n Happy Codding!")

// Task 4
// alert("Welcome to JS Land....")
// alert("Happy Codding! \n☐ Prevent this page form creating additional dialogs")

// Task 5
let a="Hello... I can run JS through my web browser's console"
console.log(alert(a))

// Task 6
// done in task 6 file

// Task 7
// done in task 6 file

// Chapter 2 (String for Variable)
// Task 1
    // var username;

// Task 2
    // var myName = "Muhammad Ahmed"

// Task 3
    // var message = "Hello World"
    // alert(message)

// Task 4
// var studentName ="Muhammad Ahmed"
// var age = "17 years old"
// var profession = "Certified Web App Developer"
// alert(studentName)
// alert(age)
// alert(profession)

// Task 5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizza)

// Task 6
// var email = "ahmedxyz@gmail.com"
// alert("My email address is " + email)

// Task 7
// var book = "A smarter way to learn JavaScript"
// alert("I am trying to learn from the Book "+book)

// Task 8
// document.write("Yah! I can write HTML content through JavaScript ")

// Task 9
// var char ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(char)

// Chapter 3 (String for Numbers)
// Task 1
// var age = "I am 17 years old"

// Task 2
// var visit="You have visited this site 2 times"
// alert(visit)

// Task 3
// var birthYear = 2006
// console.log("My birth year is "+ birthYear )
// console.log("Data type of my declared variable is " +typeof birthYear)

// Task 4
// var visitorName =prompt("Please enter your name")
// var productTitle=prompt("Please enter the product you want buy")
// var quantity=prompt("Please enter the quantity")
// console.log("“"+visitorName+" ordered "+quantity+" "+productTitle+" (s) on XYZ Clothing store”.")

// Chapter 4 (Variable:legal or illegal)
// task 1
// let ahmed="17";"years";"old"

// task 2

// illegal variable
// var 12
// var class
// var 0233
// var +ahmed
// var 2sda

// legal variable
// var ahmed
// var $memon
// var _ali
// var ahmed324
// var ahmed$

// task 3
// document.write("<h1>Rule for nameing variables</h1></br>")
// document.write( "Variable names can only contain ,number,$ and _. For example $my_1stVariable</br>")
// document.write("Variables must begin with a letter, $ or _. For example : $name, _name or name</br>")
// document.write(" Variable names are case sensitive</br>")
// document.write(" Variable names should not be JS keywords</br>")

// Chapter 5 (Math Expression)
// Task 1 
// var a =parseInt(prompt("Enter any number"));
// var b =parseInt(prompt("Enter any number"));
// var c =a+b;
// document.write("Sum of " +a+ " and " +b+ " is " +c)

// Task 2
// var a =parseInt(prompt("Enter any number"));
// var b =parseInt(prompt("Enter any number"));
// var c =a-b;
// document.write("Subtraction of " +a+ " and " +b+ " is " +c)

// var a1 =parseInt(prompt("Enter any number"));
// var b1 =parseInt(prompt("Enter any number"));
// var c1 =a1*b1;
// document.write("Multiplication of " +a1+ " and " +b1+ " is " +c1)

// var a2 =parseInt(prompt("Enter any number"));
// var b2 =parseInt(prompt("Enter any number"));
// var c2 =a2/b2;
// document.write("Division of " +a2+ " and " +b2+ " is " +c2)

// var a3 =parseInt(prompt("Enter any number"));
// var b3 =parseInt(prompt("Enter any number"));
// var c3 =a3%b3;
// document.write("Modulus of " +a3+ " and " +b3+ " is " +c3)

// Task 3
// var value;
// document.write("Value after variable declaration is:"+value +"</br>")
// var value=5
// document.write("Initial value : "+value +"</br>")
// var value1 =++value
// document.write("Value after increment is : "+value1 +"</br>")
// var value2=value1+7
// document.write("Value after addition is : "+value2 +"</br>")
// var value3=--value2
// document.write("Valueafter decrement is : "+value3 +"</br>")
// var value4=value3%3
// document.write("The remainder is : "+value4 +"</br>")

// Task 4
// var quantity =prompt("How many tickets do you want to buy")
// var ticketPrice=600*quantity
// document.write("Total cost to buy "+quantity+" tickets to a movie is "+ticketPrice+"PKR")

// Task 5
// document.write("Table of 4</br>")
// for(i=1;i<=10;i++){
//     document.write("4x"+i+"="+i*4+"</br>")
// }

// Task 6
// var C=25
// var toFahrenheit=(C*9/5)+32
// document.write(C+"°C is "+toFahrenheit+"°F</br>")

// var F=70
// var toCelsius=(F-32)*5/9
// document.write(F+"°C is "+toCelsius+"°F")

// Task 7
// var item1=+prompt("Enter the price of item 1")
// var quantity1=+prompt("Enter the Quantity of item 1")
// var item2=+prompt("Enter the price of item 2")
// var quantity2=+prompt("Enter the Quantity of item 2")
// var shippingCharges=100
// var total=item1*quantity1+item2*quantity2+shippingCharges
// document.write("<h1>Shopping Cart</h1></br>")
// document.write("Price of item 1 is "+item1+"</br>")
// document.write("Quantity of item 1 is "+quantity1+"</br>")
// document.write("Price of item 2 is"+item2+"</br>")
// document.write("Quantity of item 2 is "+quantity2+"</br>")
// document.write("Shipping charges "+shippingCharges+"</br></br>")
// document.write("Total cost of your order is "+total)

// Task 8
// var totalMarks=1100
// var obtainedMarks=950
// var percentage=obtainedMarks/totalMarks*100
// document.write("<h1>Mark Sheet</h1>")
// document.write("Total marks: "+totalMarks+"</br>")
// document.write("Marks obtained: "+obtainedMarks+"</br>")
// document.write("Percentage: "+percentage+"%")

// Task 9
// var usDollar=parseInt(prompt("Enter the US Dollars you want to convert in PKR"));
// var saudiRiyal=parseInt(prompt("Enter the Saudi Riyal you want to convert in PKR"));
// var dollarPrice=296.2
// var riyalPrice=78.9
// var total=(usDollar*dollarPrice)+(saudiRiyal*riyalPrice)
// document.write("<h1>Currency in PKR</h1></br></br>")
// document.write("Total Currency in PKR: "+total)

// Task 10
// var number=+prompt("Enter any number")
// var ans=(((number+5)*10)/2)
// document.write(ans)

// Task 11
// var currentYear=2023
// var birthYear=prompt("Enter your Birth Year")
// var age=currentYear-birthYear
// document.write("<h1>Age Calculator</h1>")
// document.write("Current Year: "+currentYear+"</br>")
// document.write("Birth Year: "+birthYear+"</br>")
// document.write("You are either "+(age-1)+" or "+age+" years old.")

// Task 12
// var r =parseInt(prompt("Enter the Radius of a circle"))
// var pi = 3.142
// var circumference = 2*pi*r
// var area =pi*r**2
// document.write("<h1>The Geometrizer</h1></br>")
// document.write("Radius of a circle : "+r+"</br>")
// document.write("The circumference is : "+circumference+"</br>")
// document.write("The area is : "+area)

// Task 13
// var snack=prompt("Enter snack you eat every day")
// var age=prompt("Enter your current age")
// var maxAge=prompt("Enter your Estimated maximum age")
// var perDay=prompt("Enter the quantity of snacks you eat perday")
// var totalSnack=(maxAge-age)*perDay
// document.write("<h1>The Lifetime Supply Calculator</h1></br>")
// document.write("Favourite Snack: "+snack+"</br>")
// document.write("Current age: "+age+"</br>")
// document.write("Estimated Maximum Age: "+maxAge+"</br>")
// document.write("Amount of snacks per day: "+perDay+"</br>")
// document.write(" You will need "+totalSnack+" "+snack+" to last you until the ripe old age of "+maxAge)

// Chapter 6-8 (Math Expression)
// Task 1
// var a=parseInt(prompt("Enter the value of a"))
// document.write("Result:</br>")
// document.write("The value of a is: "+a+"</br>")
// document.write("-------------------------</br></br>")
// document.write("The value of ++a is: "+ ++a+"</br>")
// document.write("Now the value of a is: "+a+"</br></br>")
// document.write("The value of a++ is: "+ a++ +"</br>")
// document.write("Now the value of a is: "+a+"</br></br>")
// document.write("The value of --a is: "+ --a+"</br>")
// document.write("Now the value of a is: "+a+"</br></br>")
// document.write("The value of a-- is: "+ a-- +"</br>")
// document.write("Now the value of a is: "+a+"</br>")

// Task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write("a is: "+a+"</br>")
// document.write("b is: "+b+"</br>")
// document.write("result is: "+result)

// Task 3
// var userName=prompt("Enter your Name")
// document.write("Have a nice day "+userName)

// Task 4
// var num= parseInt(prompt("Enter any number")) 
// if(isNaN(num)){
//     for(let i=1;i<=10;i++)
//     document.write(5+"x"+i+"="+5*i+"</br>")   
// }
// else{
//     for(let i=1;i<=10;i++)
//      document.write(num+"x"+i+"="+num*i+"</br>")
// }

// Task 5
// var sub1=prompt("Enter your First subject")
// var sub2=prompt("Enter your Second subject")
// var sub3=prompt("Enter your Third subject")
// var obtMarks1=parseInt(prompt("Enter your obtained marks in  First subject"))
// var obtMarks2=parseInt(prompt("Enter your obtained marks in  Second subject"))
// var obtMarks3=parseInt(prompt("Enter your obtained marks in  Third subject"))
// var totalMarks=100
// var allMarks=300
// var totalObtMarks=obtMarks1+obtMarks2+obtMarks3
// document.write("Subject Total Marks Obtained Marks   Percentage</br>")
// document.write(sub1+totalMarks+obtMarks1+obtMarks1/totalMarks*100+"%</br>")
// document.write(sub2+totalMarks+obtMarks2+obtMarks2/totalMarks*100+"%</br>")
// document.write(sub3+totalMarks+obtMarks3+obtMarks3/totalMarks*100+"%</br>")
// document.write(allMarks+""+totalObtMarks+""+totalObtMarks/allMarks*100+"%")

// Chapter 9-11 (User Input and Conditional Statement)
// Task 1
// var city=prompt("Enter any city name")
// if(city.toLowerCase()=="karachi"){
//     document.write("Welcome to the City of Light")
// }
// else if(city.toLowerCase()=="hyderabad"){
//     document.write("Welcome to the City of Peace")    
// }
// else if(city.toLowerCase()=="lahore"){
//     document.write("Welcome to the City of Gardens")    
// }
// else if(city.toLowerCase()=="thatta"){
//     document.write("Welcome to the The City of Silence")    
// }
// else if(city.toLowerCase()=="multan"){
//     document.write("Welcome to the City of Pirs and Shrines")    
// }
// else {
//     document.write("Your entered City is not in our list")    
// }
    
// Task 2
// var gender=prompt("Please enter your gender")
// if(gender.toLowerCase()=="male"){
//     document.write("Good Morning Sir")    
// }
// else if(gender.toLowerCase()=="female"){
//     document.write("Good Morning Ma'am")    
// }
// else(
//     document.write("Please enter your gender")    
// )

// Task 3
// var signalColor=prompt("Enter the color of traffic signal")
// if(signalColor.toLowerCase()=="red"){
//     document.write("Must Stop")
// }
// else if(signalColor.toLowerCase()=="yellow"){
//     document.write("Ready to move")
// }
// else if(signalColor.toLowerCase()=="green"){
//     document.write("Move now")
// }
// else{
//     document.write("Enter correct traffic signal color")
// }

// Task 4
// var petrol=parseInt(prompt("Enter the current fuel in your car (in liters)"))
// if(petrol<=1){
//     document.write("Please refill the fuel in your car")
// }
// else if(petrol>1){
//     document.write("No need to refill the fuel in your car")
// }
// else{
//     document.write("Please enter the amount of petrol in your car")
// }

// Task 5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Task 6
// var math=parseInt(prompt("Enter the Marks obtained in Math"))
// var eng=parseInt(prompt("Enter the Marks obtained in Eng"))
// var sci=parseInt(prompt("Enter the Marks obtained in Science"))
// var totMarks=300
// var totObtMarks=math+eng+sci
// var percent=totObtMarks/totMarks*100
// if(percent>=80){
//     document.write("<h1><b>Marks Sheet</b></h1></br>")
//     document.write("Total Marks : "+totMarks+"</br>")
//     document.write("Marks obtained : "+totObtMarks+"</br>")
//     document.write("Percentage : "+percent+"%</br>")
//     document.write("Grade : A=one</br>")
//     document.write("Remarks : Excellent")
// }
// else if(percent>=70){
//     document.write("<h1><b>Marks Sheet</b></h1></br>")
//     document.write("Total Marks : "+totMarks+"</br>")
//     document.write("Marks obtained : "+totObtMarks+"</br>")
//     document.write("Percentage : "+percent+"%</br>")
//     document.write("Grade : A</br>")
//     document.write("Remarks : Good")
// }
// else if(percent>=60){
//     document.write("<h1><b>Marks Sheet</b></h1></br>")
//     document.write("Total Marks : "+totMarks+"</br>")
//     document.write("Marks obtained : "+totObtMarks+"</br>")
//     document.write("Percentage : "+percent+"%</br>")
//     document.write("Grade : B</br>")
//     document.write("Remarks : You need to improve")
// }
// else if(percent<60){
//     document.write("<h1><b>Marks Sheet</b></h1></br>")
//     document.write("Total Marks : "+totMarks+"</br>")
//     document.write("Marks obtained : "+totObtMarks+"</br>")
//     document.write("Percentage : "+percent+"%</br>")
//     document.write("Grade : Fail</br>")
//     document.write("Remarks : Sorry")
// }
// else{
//     document.write("Please enter correct information")
// }

// Task 7
// var secNum=parseInt(prompt("Enter the secret number ranging from 1 to 10"))
// var guessNum=parseInt(prompt("Guess the secret number ranging from 1 to 10"))
// if(secNum==guessNum){
//     document.write("Bingo! Correct answer")
// }
// else if(guessNum+1==secNum){
//     document.write("Close enough to the correct answer")
// }
// else{
//     document.write("Try Again")
// }

// Task 8
// var num=parseInt(prompt("Enter any number"))
// if(num%3==0){
// document.write("The given number is divisible by 3")
// }
// else{
//     document.write("The given number is not divisible by 3")
// }
        
// Task 9
// var num1=parseInt(prompt("Enter any number"))
// if(num1%2==0){
// document.write("Even number")
// }
// else{
//     document.write("Odd number")
// }

// Task 10
// var temp =parseInt(prompt("Enter the temperature"))
// if(temp>=40){
//         document.write("It is too hot outside.")

// }
// else if(temp>=30){
//         document.write("The Weather today is Normal.")

// }
// else if(temp>=20){
//         document.write("Today's Weather is cool.")

// }
// else if(temp>=10){
//         document.write("OMG! Today's weather is so Cool.")
// }
// else 
// {
//     document.write("Enter correct Temperature")
// }

// Task 11
// var Num1 =parseInt(prompt("Enter the First number"))
// var Num2 =parseInt(prompt("Enter the Second number"))
// var operator =prompt("Enter any operator")

// if(operator=="/"){
//     document.write(Num1/Num2)
// }
// else if(operator=="*"){
//     document.write(Num1*Num2)
// }
// else if(operator=="+"){
//     document.write(Num1+Num2)
// }
// else if(operator=="-"){
//     document.write(Num1-Num2)
// }
// else if(operator=="%"){
//     document.write(Num1%Num2)
// }
// else{
//     document.write("Enter correct information")
//}

// Chapter 12-13 (IF Else & Else If)
// Task 1   
//     var ascii =prompt("Enter a Character or a Number")
//     var char = ascii.charCodeAt()
//     if(char>=97 && char<=122){
//         document.write("Lowercase Character")
//     }
//     else if(char>=65 && char<=90)
//     {
//         document.write("Uppercase Character")
//     }
//     else if(char>=48 && char<=57){
//         document.write("Number")
//     }
//     else{
//         document.write("Enter correct input")
//     }

// Task 2
// var int1=parseInt(prompt("Enter First Integer"))
// var int2=parseInt(prompt("Enter Second Integer"))
// if(int1>int2){
//     document.write(int1)
// }
// else if(int1<int2){
//     document.write(int2)
// }
// else if(int1==int2){
//     document.write("Both numbers are equal")
// }
// else{
//     document.write("Enter correct numbers")
// }

// Task 3
// var number=parseInt(prompt("Enter a number"))
// if(number>0){
//     document.write("Positive integer")
// }
// else if(number<0){
//     document.write("Negative integer")
// }
// else if(number==0){
//     document.write("Zero")
// }
// else{
//     document.write("Please Enter a number")
// }

// Task 4
// var char=prompt("Enter a character")
// if(char.toLowerCase()=="a" || char.toLowerCase()=="e" || char.toLowerCase()=="i" || char.toLowerCase()=="o" || char.toLowerCase()=="u"){
//     document.write(true)
// }
// else{
//     document.write(false)
// }

// Task 5
// var pass="Smit"
// var password=prompt("Please Enter your password")
// if(!password){
// document.write("Please enter your password")
// }
// else if(password==pass){
// document.write("Correct! The password you entered matches the original password")
// }
// else{
// document.write("Incorrect password")
// }

// Task 6
// var greeting;
// var hour = 13;
// if (hour < 13) {
// greeting = document.write("Good day");
// }
// else{
// greeting = document.write("Good evening");
// }

// Task 7
// var time=parseInt(prompt("Please enter the time in 24 hour format i.e 1900"))
// if(time>=0 && time<1200){
//     document.write("Good Morning!")
// }
// else if(time>=1200 && time<1700){
//     document.write("Good Afternoon!")
// }
// else if(time>=17000 && time<2100){
//     document.write("Good Evening!")
// }
// else if(time>=2100 && time<2359){
//     document.write("Good Night!")
// }
// else{
//     document.write("Enter correct time")
// }

// Chapter 14-16(Array)
// Task 3
// var string=["Ahmed","Ali","Nadir","Ameer","Hamza"]

// Task 4
// var number=[1,3,4,5,7,6]

// Task 5
// var boolean=[true,false]

// Task 6
// var mixArray=["Ahmed",17,true]

// Task 7
// var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h2>Qualifications:</h2></br>")
// for(i=1;i<=qualification.length;i++){
//     document.write(i+") "+qualification[i-1]+"</br>")
// }

// Task 8
// var Sname=["Ahemd","Hamza","Sameer"]
// var score=["457","380","275"]
// var total=500
// for(i=0;i<Sname.length;i++){
//     document.write("Score of "+Sname[i]+" is "+score[i]+" Percentage:"+score[i]/total*100+"%</br>")
// }

// Task 9
// var color=["green","blue","black","red","pink"]
// document.write(color+"</br>")
// var modArray=prompt("What color do you want to add at the beginning of the array")
// color.unshift(modArray)
// document.write(color+"</br>")
// var mod1Array=prompt("What color do you want to add at the ending of the array")
// color.push(mod1Array)
// document.write(color+"</br>")
// color.unshift("purple","white")
// document.write(color+"</br>")
// color.shift()
// document.write(color+"</br>")
// color.pop()
// document.write(color+"</br>")
// var colorName=prompt("Enter the color name you want to add")
// var position=parseInt(prompt("Please enter the position at which you want to add color"))
// color[position]=colorName;
// document.write(color+"</br>")
// var position1=parseInt(prompt("Please enter the position at which you want to delete the color"))
// var position2=parseInt(prompt("Please enter how many color do you want to delete"))
// color.splice(position1-1,position2)
// document.write(color)

// Task 10
// score=["320","230","480","120"]
// document.write("Scores of Students: "+score+"</br>")
// score.sort()
// document.write("Ordered Scores of Students: "+score)

// Task 11
// var cityName=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write(cityName+"</br>")
// var cityName=cityName.slice(2,4)
// document.write(cityName)

// Task 12
// var arr = ["This","is","my","cat"];
// document.write("Array:</br>"+arr+"</br>")
// var modArr=arr.join(" ")
// document.write("String:</br>"+modArr)

// Task 13
// var out=["Keyboard","Mouse","Printer","Monitor"]
// for(i=0;i<out.length;i++){
// document.write("Out:</br>"+out[i]+"</br>")
// }

// Task 14
// var out=["Keyboard","Mouse","Printer","Monitor"]
// for(i=out.length-1;i>=0;i--){
// document.write("Out:</br>"+out[i]+"</br>")
// }

