// const x = [1, 5, 2, 4, 3, 6, 8, 10, 9]
// console.log(typeof x);
// console.log(x.sort(function (a, b) {
//     return (a - b)
// }));
// console.log(x.sort(function(a,b){return a - b}))
// console.log(x.length-1)
// console.log(x.sort(function (b, a) { return (a - b) }))
// const cars = [
//     {type: "VOLV0" , years: 2000},
//     {type: "VOLV0" , years: 3000},
//     {type: "VOLV0" , years: 2090},
// ]

// console.log(cars.sort(function(b,a){return a.years - b.years}))


// const ages = [
//     {age : 20},
//     {age : 1200},
//     {age : 500},
//     {age : 300}
// ]
// console.log(ages.sort(function(a,b){
//    return a.age-b.age
// }))
// console.log(cars.sort(function(a,b){return a.years - b.years}))


// const points = [40, 100, 1, 5, 25, 10];
// // document.getElementById("demo").innerHTML = points;
// function myFunction2() {
//     points.sort(function(a, b){return b - a});
//     document.getElementById('demo').innerHTML = points
//   }
//   myFunction2()

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return 0.5 - Math.random()});
// document.getElementById('demo').innerHTML = points

// const x = [10,30,40,60,70,80,100,150]
// x.sort(function(){return 0.5 - Math.random()})
// document.getElementById('demo1').innerHTML = x;
// const dhur = [10,20,40,10,500,1000]
// const bal = dhur.map(myFunction)

// function myFunction(value) {
// return value * 2
// }

// console.log(bal)



// const x = [100, 100, 200, 500, 300, 40, 9000]
// const y = x.map(myFunction2)

// function myFunction2(value) {
//     return value * 2;
// }
// console.log(x)
// console.log(y)
// let y = "";
// x.forEach(myFunction);
// function myFunction(value) {
// y += value + '<br>'
// }

// const y = x.filter(myFunction)
// function myFunction(value) {
//     return
// }

// console.log(y)


// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value < 150;
// }

// console.log(allOver18)

// const fruits = ["Apple", "Mango", "Mango", "Orange", "Apple", "Mango"];


// console.log(typeof fruits)
// console.log(z);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let y = fruits.includes("Mango");
// console.log(y)

// document.getElementById('demo').innerHTML = new Date(2002,2,1,11);
// const x = [100,20,50,20,40,30]
// let y = x.sort(function(a,b){return 0.5 - Math.random()})
// console.log(y)

// let d = new Date();
// document.getElementById('demo').innerHTML = d.toDateString();
// document.getElementById('demo').innerHTML = d.toISOString();
// document.getElementById('demo').innerHTML = d.toUTCString();
// document.getElementById('demo').innerHTML = d.toLocaleDateString();
// document.getElementById('demo').innerHTML = d.toLocaleTimeString();
// document.getElementById('demo').innerHTML = d.toLocaleString();
// document.getElementById('demo').innerHTML = d.toDateString();
// document.getElementById('demo').innerHTML = d.toLocaleString();

// let d = new Date(2023,9,20)
// document.getElementById('demo').innerHTML = d.toDateString();
// const d = new Date("2015-03-25");
// const e = new Date("2015-03-25");
// const d = new Date("2015-03-24T18:00:00.000Z");

// document.getElementById('demo').innerHTML = d.toDateString();
// document.getElementById('demo1').innerHTML = e.toLocaleTimeString();

// const d = Date.parse("2023,10,18");
// const d = new Date(1697565600000)
// document.getElementById('demo').innerHTML = d
// let time = Date.parse('2002,03,01')
// let realTime= new Date(time)
// document.getElementById('demo').innerHTML = time
// document.getElementById('demo1').innerHTML = realTime.toISOString();

// let time = "";
// const oneday = new Date();
// const someday = new Date();

// someday.setFullYear(2100,1,3);

// if(oneday < someday){
//     time = "before 2100"
// } else
// {
//     time = "after 2100"
// }
// document.getElementById('demo').innerHTML = time;

// let y = new Date();
// let x = y.setDate(y.getDate()+ 50000)
// console.log(y);
// let x =Math.floor(Math.random() * 1000)
// console.log(x)
// let x = [100,200,300,500,2000,49,2042]
// let y = x.sort(function(a,b){
//     return .5 - Math.random()
// })
//  console.log(y)

// let x = [10,20,30,40,50,60]
// let y = (Math.floor(Math.random() * 10) + 1)
// console.log(y)

// function myFunction(min, max) {
//    return Math.floor(Math.random() * (max - min) + min)
// }

// function myFunction(min, max) {
//    return Math.floor(Math.random() * (max - min) + min)
// }
// let y = Math.floor(Math.random() * 10)



// Ludu Practice////

// function myFunction(min , max) {
//    return Math.floor(Math.random() * (max - min + 1) + min)
// }

// class alphabetecally/////
// const students = ["Israfil","Miraz","Sufian","Abir","Mehedi"]
// const students = [10,20,10,20,40,30,400,200,50,300]

// let y = students.sort(function() {
//    return Math.random() - .5
// })

// console.log(y)


// const x = [ 10,20,40,60,20,50,70]
// const y = x.sort(function(){
//     return Math.random() - 0.5
// })

// // console.log(x)
// console.log(y)
// document.getElementById('demo').innerHTML = y

// const x = 'I Love Bangladesh'

// const y = x.includes("Love");
// console.log(y)

// const vowels = ['a','e','i','o','u','A','E','I','O','U'];

// function countValue(sentence){
//    const letter = Array.from(sentence);
//     let count = 0;

//     letter.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     })
//     return count;
// }
// console.log()

// const x =
// function myFunction(min, max) {
//     return Math.floor(Math.random() * (max - min + 1))
// }
// console.log(myFunction(0,20))


// const vowels = ['a','e','i','o','u']

// function findVowels(sentence){
//     let letter = Array.from(sentence);
//     let count = 0;
//     letter.forEach(function(value){
//         if(vowels.includes(value))
//         count++
//     })
//     return count
// }

// console.log(findVowels('i am not good'));


// const x = (100> 900)
// console.log(x);

// const y = Boolean(100>10)
// console.log(y)

// let z = 0;
// console.log(Boolean(z))
// let age = "milon";
// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number";
// } else {
//   voteable = (age < 18) ? "Too young" : "Old enough";
// }

// console.log(voteable)
// let age = 34;

// console.log(age > 18 ? (age < 30) ? "you adult" : "Too Young" : "You are child")


// let x = '17';
// x = Number(x);
// if (isNaN(x)) {
//   names = "Input is not a numberr"
// } else {
//   names = (x < 18) ? "You are Child" : "You Are Young"
// }
// console.log(names)

// let age = 19;
// age = Number(age);
// if (isNaN(age)) {
//   voteable = "Input is not a number"
// } else {
//   voteable = 18 < age ? "You are able to vote" : "You are not able"
// }
// console.log(voteable);

// let x = '10';
// if(x==10){
//     y = 'Yes'
// }else{
//     y= 'No'
// }
// console.log(y);

// let x = 100;
// let y = 203;
// if(x < y){
//    alert("Hedayet dao")
// }

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

//   console.log(day)

// let number = 2
// switch (number) {
//   case 0:
//     text = "One"
//     break;
//   case 1:
//     text = "two";
//     break;
//   case 2:
//     text = "three";
//     break;
//   case 3:
//     text = "four";
//     break;
//   case 4:
//     text = "five";
//     break;
//   case 5:
//     text = "six";
//     break;
//   case 6:
//     text = "seven";
//     break;
//     default:
// }
// console.log(text)

// let fName = "shIhaB";
// fName = fName.toUpperCase(fName)
// switch(fName){
//   case "TABIJ":
//     text = "Yes I am Tabij Khan"
//     break;
//   case "SAKIB":
//     text = "Yes I am Sakib Khan"
//     break;
//   case "SHIHAB":
//     text = "Yes I am Shihab Khan"
//     break;
//   case "PUKBOY":
//     text = "Yes I am PukBoy Khan"
//     break;
//   default:
//     text = "I am Poor Machine"
// }

// console.log(text);


// let uniqueNumber = '100';
// uniqueNumber = Number(uniqueNumber)

// switch (uniqueNumber) {
//     case 10:
//         console.log("Yeah.This is Unique!")
//         break;
//     case 1:
//         console.log("Yeah.This is Unique!")
//         break;
//     case 18:
//         console.log("Yeah.This is Unique!")
//         break;
//     case 13:
//         console.log("Yeah.This is Unique!")
//         break;
//     default:
//         console.log("That's Not Unique!I'm Sorry")
// }

// console.log()
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// const chul = ["yellow","red","black","blue","funky"]
// text = "";
// for(let i = 0;i<chul.length;i++){
//     text+=chul[i] + " car" +"<br>"
// }
// let num;
// for(num = 0;num<10;num++){
//     console.log(num)
// }
// console.log(num)

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>"
// }
// document.getElementById("demo").innerHTML = text;


// let number;
// for(number = 1;number <= 10;number++){
//     console.log("Number"+number)
// }


// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// console.log(numbers2)



// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// console.log(Array.from(Text));

// function myFunction(value) {
//   txt += value * 2 + "<br>";
// }

// const names = ["LG","Canon","Samsung","OnePlus"]
// let x = '';
// names.forEach(myFunction)
// function myFunction(items,index){
//     x+=index + " : "+ items + "<br>"
// }
// document.getElementById('demo').innerHTML = x

// const names = ["Abir","Mehedi","Aktarul","Faysal","Lg","samsung"]
// let nameWithSerial = "";
// names.forEach(serialFunction);
// function serialFunction(value,index){
//     nameWithSerial+= index + " : " + value + "<br>"
// }
// document.getElementById('demo').innerHTML = nameWithSerial;



// let text = "";
// for (let x in person) {
//   // text += person['fname'];
// }
// document.getElementById("demo").innerHTML = text;
// const numbers = [10,20,30,40,50,60,76];
// let text = "";
// for(let x in numbers){
//   text += numbers[x] + "<br>"
// }
// document.getElementById('demo').innerHTML = text;


// const person = { fname: "John", lname: "Doe", age: 25 };
// text = "";
// for(let details in person){
//   text+=person[details]
// }

// document.getElementById('demo').innerHTML = text;

// const cars = ["Volvo", "Bmw", "Lamborgini", "Porshe", "Tesla"]
// let text = "";

// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>"
// }
// document.getElementById("demo").innerHTML = text;

// let text = "";
// cars.forEach(myFunction)

// function myFunction(value,index){
//     text+=index + value + '<br>'
// }

//  document.getElementById("demo").innerHTML = text;

// let language = "JavaScript";

// let text = "";
// for (let x of language) {
//   text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;
// let language = "JavaScript";
// let x = "";
// for(let i of language){
//     x+=i + "<br>"
// }
// console.log(x)

// let a = "car";
// let b = "";

// for(i = 0;i<=13;i++){
//     b+= i + " " + a + "<br>"
// }

// document.getElementById('demo').innerHTML = b;


// let a = Math.round(Math.random() * 10);

// let counter = 0;
// while(counter < 5){
//     console.log("Hello World!")
//     counter++
// }

// let year;
// for (year = 1950; year <= 2023; year++) {
//     document.getElementById('demo').innerHTML = year
//     console.log(year)
// }

// let number = 1;
// while(number<=700){
//     console.log("Number " + number)
//     number++
// }
// let names = { name: "israfil", age: 10 }
// let test = "";
// for (let i in names) {
//     test += names[i] + "<br>"
// }
// console.log(test);

// let counter = 1;
// do{
//     console.log("hello");
//     counter++;
// } while(
//     counter<=4
// )
//  let numbers = 10;
//  while(numbers<= 20){
//     document.getElementById('demo').innerHTML = numbers + " numbers";
//     console.log(numbers + "numbers")
//     if(numbers==15){
//         break;
//     }
//     numbers++;
//  }

// let numbers = 1;
// while(true){
//     console.log(numbers)
//     if(numbers==5){
//         break;
//     }
//     numbers++
// }

// let numberss ="1";
// while(true){
//     console.log(numberss)
//     if(numberss===10){
//         break
//     }
//     numberss++
// }

// let names = "";
// while(true){
// let promtName = prompt("Enter Your name?");

// if(!promtName){
//     break;
// }
// names+=promtName;
// }
// console.log(names);

// const girls = ["Tamima","Asifa","Sumona"]
// girls.push("Milona");
// for(let i = 0;i<girls.length;i++){
//     console.log(girls[i])
// }


// const brothers = ["milon","sumon","miraz"]
// brothers.push("Asif")
// for(let name= 0;name<brothers.length;name++){
//     console.log(brothers[name])
// }


// const fuckboy = ["Jony","daniel","kutta"]
// const dhur = ["a","b","c","d"]
// let fuckBoyLish = "";
// for(let i = 0;i<dhur.length;i++){
//     console.log(dhur[i])
// };

// const names = ["milon","milona","milonaa"]
// console.log(names)
// console.log("heli");

// const letters = new Set(["a","b","c"]);
// letters.add("d")
// letters.add("e*")
// console.log(letters)

// const lett =  new Set (["abb","bbb","cbb","dbb"])
// lett.add("edd")
// console.log(lett);
// const letters = new Set(["a","bb","cc","ee"])
// console.log(letters.values());

// cars= ["volvo","bmw","mazda","toyota","honda","lamborgini","bugatti"]
// console.log(cars);
// let s_car = "";
// for(i = 0;i < cars.length; i++){
//      console.log(cars[i])
// }
// let num = "";
// for(let i = 0;i<10;i++){
//      console.log(num);
// }

// const numbers = new Map();
// numbers.set("Bugatti",100)
// numbers.set("chiron",200)
// console.log(numbers);
// const letters = new Map([
//      ["toyota",400],
//      ["toyota",200],
//      ["toyota",100],
// ])

// console.log(letters);

// const cars = new Set();
// cars.add("toyotaa")
// cars.add("toyota")
// cars.add("toyota")
// console.log(cars);

// const cars = new Map();
// cars.set("Bugatti", 100);
// cars.set("Toyota", 200);
// cars.set("Bently", 300);
// cars.set("Marcedez", 400);
// cars.set("Bmw", 500);
// console.log(cars.delete("Toyota"));
// console.log(cars.has("Toyota"));
// console.log(cars);


// const numbers = new Map([
//      ["Bugatti", 300],
//      ["Toyota", 400],
//      [4000, 500],
//      [4000, 600],
//      [147570,17]
// ])
// console.log(typeof numbers);
// console.log(numbers);

// console.log(numbers.has("Bugatti"))
// console.log(numbers.get("Bugatti"));

// const letters = new Set()
// letters.add("Milona"),
// letters.add("Milonaa"),
// letters.add("Milonaaa")


// console.log(letters.values("milona"));

// const lett = new Map()
// lett.set("milon", 3),
// lett.set("elon", 52),
// lett.set("silon", 42)
// console.log(lett);

// const names = new Set()
// names.add("milon"),
// names.add("milona"),
// names.add("milonaa"),
// names.add("milonaaa")
// names.add(2000)
// console.log(names);


// const mouses = new Set();
// mouses.add("hello")
// mouses.add("hello M")
// mouses.add("hello N")
// mouses.add("hello S")
// console.log(typeof mouses);


// const cars = ["toyota","bugatti","bmw"]
// console.log(typeof cars);

// let nothing = null;
// console.log(typeof nothing);
// console.log("John".constructor)
// let st = 1000;
// console.log(st.toString());



// console.log(["bugatti","toyota","bmw","honda"].constructor)

// const lname = new Map();
// lname.set("milon", 100),
// lname.set("milon", 100),
// lname.set("milon", 100),
// lname.set("milon", 100)
// console.log(lname);

// const letters = new Map();
// letters.set("My age",22); //this on
// letters.set("My cousine age",22);
// letters.set("My sister age",22);
// letters.set("My age",220);  // or this one //map doesn't print same key twice

// console.log(letters);

// function mathRandom(min, max) {
//     return Math.floor(Math.random() * (max- min))
// }

// console.log(mathRandom(1,10));

//convert a variables into a numbers//

// let names = "Hello"
// let check = Number(names);
// document.getElementById('demo').innerHTML = typeof check;


// let a = Number("3.14")
// let b = Number(Math.PI)
// document.getElementById('demo').innerHTML = b;
// document.getElementById('demo').innerHTML = typeof b;

// let a =  String(100 + 23)
// document.getElementById('demo').innerHTML = a;

// let x = 10e4;
// document.getElementById('demo').innerHTML = x.toExponential();

// let y = 10.4
// console.log(y.toFixed());
// console.log(y.toPrecision(3));


// const numbers = [10,20,60,30,70,40,50];
// const makeNumDiffer = numbers.sort(function(){
//     return Math.random() - 0.5
// })
// document.getElementById("demo").innerHTML = makeNumDiffer;

// function outerFunction() {
//     console.log("This is the outer function.");
// }
// function innerFunction() {
//     console.log("This is the inner function.");
// }
// innerFunction();
// outerFunction();


// function outerFunction() {
//     console.log("This is the outer function.");
//  function myFunction(){
//     document.getElementById("demo").innerHTML = "Tabij Khan"
//  }
//  myFunction()
// }
// outerFunction()



// function getRandomLetter() {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     const randomIndex = Math.floor(Math.random() * alphabet.length);
//     return alphabet[randomIndex];
// }

// const randomLetter = getRandomLetter();

// console.log('Random letter:', randomLetter);

// function getRandomLetter() {
//     const startCharCode = 'a'.charCodeAt(0); // ASCII code of 'a'
//     const endCharCode = 'z'.charCodeAt(0);   // ASCII code of 'z'
//     const randomCharCode = Math.floor(Math.random() * (endCharCode - startCharCode + 1)) + startCharCode;
//     return String.fromCharCode(randomCharCode);
// }

// const randomLetter = getRandomLetter();

// console.log('Random letter:', randomLetter);

// const numbers = 10.40;
// console.log(numbers.toPrecision(10));   //return 1.04e+1

// const numbers = [10,20,30,60,40,50]
// const makeDiffer = numbers.sort(function(){
//     return Math.random() - 0.5
// })

// document.getElementById('demo').innerHTML = makeDiffer;
// console.log(String(Date()))
// console.log(String(Date())) // convert string to date
// console.log(+(true));//convert boolean to number
// const numbers = 10;
// const numbers1 = 40;
// console.log(String(Date()))
// const a = 100.10;
// console.log(parseFloat(a));
// var a = [1,2,3,4];
// console.log(a.toString());
// const a = "100";
// console.log(Number(a))
// const celebrateVictory = () => {
//     const today = new Date();
//     const victoryDay = today.getDate();
//     const victoryMonth = today.getMonth() + 1;
//     const victoryYear = today.getFullYear();

// console.log(`Congratulations on this victory Day, 
// ${victoryDay}/${victoryMonth}/${victoryYear}!Victory is sweet, and today is a testament to out strength and resilience.let's celebrate this triumph together! #victoryDay #success`)
// }
// celebrateVictory();  //facebook



