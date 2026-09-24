// let a = 5, b = 10;
// console.log(a+b); // 15
// console.log(a-b); // -5
// console.log(a*b) // 50
// console.log(a/b); // 0.5
// console.log(a%b); // 5
// console.log(a++); // 5 (post-increment)
// console.log(a); // 6
// console.log(++a); // 7 (pre-increment)
// console.log(a); // 7
// console.log(b--); // 10 (post-decrement)
// console.log(b); // 9 
// console.log(--b); // 8 (pre-decrement) 
// console.log(b); // 8



// let a = 5, b = 10, c = "5";
// const z = a;

// console.log(a == c); // true
// console.log(a === c); //false
// console.log(a == z); // true
// console.log(a === z); //true
// console.log(a != b); //true
// console.log(a != z); // false
// console.log(a > b); //false
// console.log(a < b); // true
// console.log(a >= b); // false
// console.log(a <= b); // true



// let a = 5, b = 10, c = 15;

// console.log(a); // 5
// a = 5;
// console.log(a) // 10
// a += b; 
// console.log(a); // 20
// a -= b;
// console.log(b); // 10
// c *= b;
// console.log(a); // 150
// c /= 5;
// console.log(c); //30
// b % 2;
// console.log(b); //0




// let ism = 'Ulug\'bek'
// console.log(ism);

// let familiya = "Samig\"jonov"
// console.log(familiya);



// let ism = "Jahongir";
// let message = 'Salom ' + ism + '!';
// console.log(message);




// let ism = 'Jahongir';
// let message =  `Salom ${ism} !`
// console.log(message);




// const yosh = 10;
// const a = yosh > 18 // false
// const b = yosh < 20 //true

// // AND operatori
// console.log(a && b); // false

// // OR operatori 
// console.log(a || b); // true

// // NOT operatori
// console.log(!a); // true
// console.log(!b); // false



// const htmlPassed = true;
// const cssPassed = true;


// if (htmlPassed && cssPassed){
//     console.log("Bootstrap kursini boshlashingiz mumkin!");
// }else if(htmlPassed || cssPassed) {
//     console.log("Ikkinchi kursni tugatishingiz kerak!")
// }else{
//     console.log("Iltimos avval ikkala kursni tugatib chiqing!");
// }



// const yosh = '23'; // string
// console.log(yosh); // string
// console.log(Number(yosh)); // number

// console.log(yosh + 1); // number
// console.log(Number(yosh) + 1); // 24

// const ism = 'Jahongir';
// console.log(Number(ism)); // NaN


// const yil = 2026; //Number
// console.log(yil); //Number
// console.log(String(yil)); //String



// console.log('Men ' + 2003 + 'chi yilda tavallud topganman'); //auto string conversion


// console.log('30' - '10' - 5); //auto number conversion



// // Falsy qiymatlar
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(On));

// // Truthy qiymatlar
// console.log(Boolean('Jahongir'));
// console.log(Boolean(23));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('0'));
// console.log(Boolean('false'));



// const ism = "";
// if (ism) {
//     console.log('Sizning ismingiz: ' + ism);     
// }else{
//     console.log("Iltimos ism kiriting");   
// }



// function meningFunksiyam(son1, son2){
//      console.log(son1 + son2)
// }

// console.log(meningFunksiyam(10, 20)); //30
// meningFunksiyam(30, 40); // 70


// console.log(kvadrat(2)) // 4

// function kvadrat(son) {
//     return son * son;
// }

// kvadrat(10); // 100


// const kvadrat = function(son){
//     return son * son;
// }

// console.log(kvadrat(2)) // 100;



// const kvadrat = (son) => {
//     return son * son;
// }

// kvadrat(10); // 100


// const kvadrat = (son) => son * son;

// kvadrat(10);
// console.log(kvadrat(10))


// const print = () => console.log("printing...");

// print()



// const volume = (a, b, c) => a * b * c;

// volume(1, 2, 3) // 6



// // Function declaration
// function astra(number) {
//     if(number % 2 === 0) {
//         console.log(`${number} soni juft`);
//     }else{
//         console.log(`${number} soni toq`);
//     }
// }

// astra(5);


// // Function expression
// const astra = function(number) {
//      if(number % 2 === 0) {
//         console.log(`${number} soni juft`);
//     }else{
//         console.log(`${number} soni toq`);
//     }
// }



// Arrow function
// const astra = (number) => {
//     if(number % 2 === 0) {
//         console.log(`${number} soni juft`);
//     }else{
//         console.log(`${number} soni toq`);
//     }
// }

// astra(10)



// // Function declaration
// function maxNum(son1, son2) {
//     if(son1 >= son2) {
//         return son1;
//     }
//         return son2;
// }

// console.log(maxNum(30, 20));


// Function expression
// const maxNum = function(son1, son2) {
//      if(son1 >= son2) {
//         return son1;
//     }
//         return son2;
// }

// console.log(maxNum(10, 20));


// Arrow function
// const maxNum = (son1, son2) => {
//      if(son1 >= son2) {
//         return son1;
//     }
//         return son2;
// }

// console.log(maxNum(10, 20));



// Function declaration
// function reverseDec(number) {
//     const variable1 = String(number); // "15"
//     const variable2 = variable1.split('').reverse().join('');
//     return Number(variable2);
// }

// console.log(reverseDec(15));


// Function expression
// const reverseDec = function(number) {
//      const variable1 = String(number); // "15"
//      const variable2 = variable1.split('').reverse().join('');
//      return Number(variable2);
// }

// console.log(reverseDec(45));



// Arrow function
// const reversDec = (number) => {
//     const variable1 = String(number); // "15"
//     const variable2 = variable1.split('').reverse().join('');
//     return Number(variable2);
// }

// console.log(reversDec(14));




// bo'sh array
// const emptyArray = [];

// // sonlar array'i 
// const sonArray = [1, 2, -9, 5];

// // String array'i
// const stringArray = ['JavaScript', 'Java', 'Go'];

// // aralash qiymatlardan tashkil topgan array
// const mixedArray = ['JavaScritp', 2, false, null];


// const helloArray = ['h', 'e', 'l', 'l', 'o'];

// // birinchi element
// console.log(helloArray[0]); // "h"

// // uchinchi element 
// console.log(helloArray[2]); // "l"




// const languages = ['js', 'java'];
// console.log(languages);

// languages.unshift('go');
// console.log(languages); // ['go', 'js', 'java']



// const languages = ['js', 'java', 'go'];
// console.log(languages);

// languages[1] = 'swift';
// console.log(languages); // ['js', 'swift', 'go']




// const languages = ['js', 'java', 'go', 'swift'];

// const deleteLanguages = languages.shift();
// console.log(languages); // ['java', 'go', 'shift']
// console.log(deleteLanguages); // ['js']




// const languages = ['js', 'java', 'go'];
// console.log(languages); // 3



// // // concat()
// const array1 = [1, 4];
// const array2 = [2, 3, 7];
// const result = array1.concat(array2); 
// console.log(result);

// // find()
// const findValue = (number) => number === 2;
// const foundValue = result.find(findValue);
// console.log(foundValue);  // 2


// // filter()
// const filterValues = number => number > 5;
// const filteredValues = result.filter(filterValues);
// console.log(filteredValues); // 7


// // map() 
// const mapValues = number => 'Son: ' + number;
// const mappedValues = result.map(mapValues);
// console.log(mappedValues); // ['Son: 1', 'Son: 2', ....];


// // sort()
// const sortValues = (number1, number2) => number1 - number2;
// result.sort();
// console.log(result); // [1, 2, 3, 4, 7]



// const dasturchi = {
//     ism: 'Jahongir',
//     yosh: 23,
//     manzil: {
//         mamlakat: 'Uzbekistan',
//         shahar: 'Tashkent',
//         uy: 7
//     }
// }

// console.log(dasturchi.manzil.shahar);


// const dasturchi = {
//     ism: 'Jahongir',
//     yosh: 23,
// }

// console.log(Object.entries(dasturchi)); // ['Jahongir', 23]




// const number = 2;
// if (number > 0) {
//     console.log("Berilgan son musbat");
// }else{
//     console.log("Berilgan son manfiy");
// }

// console.log("if/else'dan keyingi qator");



// const number = -2;
// if (number > 0) {
//     console.log("Berilgan son musbat");
// }else if (number === 0) {
//     console.log("Berilgan son 0");
// }else{
//     console.log("Berilgan son manfiy");
// }



// const number = 5;
// let output;

// switch (number) {
//     case 1:
//         output = 'bir';
//         break;
//     case 2:
//         output = 'ikki';
//         break;
//     default:
//         output = 'topilmadi';
//         break;
// }
// console.log(`Qiymat: ${output}`);




// for (let i = 0; i < 10; i++) {
//     console.log("Salom dunyo");
// }


// let sum = 0;

// for (let i = 1; i < 10; i++) {
//     sum += i; // sum = i + sum
// }

// console.log(`Yig'indi: ${sum}`);


// // birdan 5gacha bo'lgan sonlarni console'ga chiqaruvchi loop
// for (let i = 1; i <= 5; i++) {
//     // break condition
//     if(i === 4) {
//         break;        
//     }
//     console.log(i);
// }


// birdan 5gacha bo'lgan sonlarni console'ga chiqaruvchi loop
// for (let i = 1; i <= 5; i++) {
//     // continue condition
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
    
// }



// let i = 1;

// while (i < 10) {
//     // console.log("Salom dunyo!");
//     if(i === 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }



// let i = 1, sum = 0;

// while (i <= 10) {
//     sum += i;
//     i++;
// }

// console.log(`Summa: ${sum}`);




// do{
//     console.log('Salom dunyo');
// }while(false);


// let i = 0;

// do {
//     console.log("Salom dunyo!");
//     i++;
// }while (i < 10);



// while (false){
// 	console.log('Salom dunyo');
// }



// // bu loop 5 martta ishga tushadi
// for (let i = 1; i <= 5; i++){
//     // berilgan loop tanasi (body)
// }


// const inRange = (min, max, number) => {
//     if(number >= min && number <= max) {
//         console.log(`Berilgan ${number} soni ${min} va ${max} orasida`);
//     }else{
//         console.log(`Berilgan ${number} soni ${min} va ${max} orasida emas`);
//     }
// }

// const minRange = 10;
// const maxRange = 30;
// const givenNumber = 50;

// inRange(minRange, maxRange, givenNumber);



// const simpleCalculator = (num1, num2, oper) => {
//     switch(oper) {
//         case 'add':
//             console.log(`Yig'indisi: ${num1 + num2}`);
//             break;
//         case 'subtrack':
//             console.log(`Ayirmasi: ${num1 - num2}`);
//             break;
//         case 'multiply':
//             console.log(`Ko'paytmasi: ${num1 * num2}`);
//             break;
//         case 'divide':
//             console.log(`Bo'linmasi: ${num1 / num2}`);
//             break;
//     }
// }

// const a = 10;
// const b = 20;
// const operation = 'divide';

// simpleCalculator(a, b, operation);



// const getLargestElement = (array) => {
//     let largest = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if(array[i] > largest) {
//             largest = array[i];
//         }
//     }
//     return largest;
// }

// const nums = [6, 51, 7, 63, 37, 673, 38, 349, 127];
// const result = getLargestElement(nums);
// console.log(`Eng katta element: ${result}`);


// const heading = document.getElementById('sarlavha')
// console.log(sarlavha);
// heading.remove();


// const inputEls = document.getElementsByName('username');
// const inputEl = inputEls[0];
// console.log(inputEl);
// inputEl.remove();



// const headings = document.getElementsByClassName('heading');
// console.log(headings);
// headings.remove()



// const headings = document.getElementsByTagName('h1');
// console.log(headings);


    // const headings = document.querySelector('#heading');
    // console.log(headings);


// const headings = document.querySelectorAll('h1');
// console.log(headings);


// const heading = document.getElementById('heading');
// heading.textContent = 'Yangi matn'



// const inputEl = document.getElementById('username');
// inputEl.value = 25;



// const element = document.querySelector('#heading');
// element.innerHTML = '<h1>Yangi Sarlavha</h1>';



// const paragraph = document.createElement('p');
// const text = document.createTextNode('Bu yerda xatboshi yozilgan');

// paragraph.appendChild(text);

// const box = document.getElementById('box');
// box.appendChild(paragraph);

// // console.log(box.parentNode);
// // console.log(box.children);

// box.remove();



// const changeHeading = () => {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'Yangi Sarlavha';
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.addEventListener('click', changeHeading);


// const btn = document.getElementById('changeHeadingBtn');
// btn.onclick = changeHeading;



// const notifyDoubleClick = () => {
//     console.log('Element ikki marta bosildi');
// }

// const btn = document.getElementById('btn');
// btn.addEventListener('mousemove', notifyDoubleClick);


// document.addEventListener('keydown', event => {
//     console.log('key: ' + event.key);
//     console.log('code:' + event.code);
// });


