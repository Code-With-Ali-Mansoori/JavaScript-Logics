// problem 1

// const x = "Hello world!";
// console.log(x);

// // problem 2 

// function sum(a,b){
// let sum = a+b;
// console.log(sum)
// }

// sum(2,0);
// sum(1,7);
// sum(1900,7637);


// // problem 3 

// function Area (l,b){

// if(l < 0 || b < 0){
//     throw new Error("Lenght and breadth should be postive!");
//     // alert("Lenght and breadth should be postive!")
// }
// const a = l*b;
// console.log("AREA OF RECTANGLE IS =",a);
// }

// Area(6,1)

// // problen no 4 


// function justifyE$O(num){

//     return num % 2 === 0 ? console.log(num,"even number") : console.log(num,"odd number");
    

//     // const a = num % 2;

//     // if( a === 0){
//     //     console.log( num ,"is an even number");

//     // } else {
//     //     console.log( num ,"is an odd number");

//     // }
// }


// // problem 4

// function smallest(a,b,c){
//     a<b && a<c ? console.log(a) : ( b<c ? console.log(b) : console.log(c) )
// }
 

// function smallest1(a,b,c){
//     if(a<b && a<c){
//         console.log(a)
//     } else if ( b<a && b<c) {  
//         console.log(b)
//     } else if (c<a && c<b){
//         console.log(c)
//     }

//     return ;
// }



// function smallest2(a,b,c){

// let smallestNum = a;

// if(b < smallestNum ){
//     smallestNum = b}





// if(c < smallestNum){
//     smallestNum = c 

//     return smallestNum;

// }
// }

// problem 6 




// function reverseing(inputSTR){
// let result = "";
// for(let i = inputSTR.lenght - 1; i >= 0; i--){
//     result = "" + inputSTR[i];}

//     return result;
// }

// console.log(reverseing("ALI"))



// function reverseArray(input) {
//     const spliting = input.split('');
//     let reversing = spliting.reverse();
//     const result = reversing.join("")
//     console.log( result);
// }
// reverseArray("softer development")

// reverseArray("NASIR")



// let str = 'oppo';

// revStr(str)

// function revStr(str) {
//     if(typeof str !== 'string'){
//         console.log('you should must input a srting')
//     }else{
//         let rev = "";
//         str.toUpperCase()
//         let arr = str.split('');

//         for(let i = arr.length-1; i >= 0; i--){
//             rev += arr[i];
//         }
//         console.log(rev)
//     }

    
// }


// function revStr(str){

//     if(typeof str !== 'string'){
//         console.log('you should must input a srting')
//     }else{
//         let stt =''; 
//         const arr = str.split("");
//         var b = arr.reverse();
//         let c =  stt + b ;
      
//         console.log(c)
//     }
 
// }


// let str = 1222;
// revStr(str);


// practical no 7

// function factorials(num) {

//     prompt("Enter the Number for Calculating Factorials : " ,num );
 
//     if(num !== String){

//         console.log("string is not acceptable");

//     } else{

//         if ( num < 0 ){

//             console.log("Negative number is not acceptable");
     
//          } else {
     
//              let result = 1;
     
//              for(let i = num; i >= 1 ; i--){

//              result = result*i;}
     
//              return result;
//          }
//     }
     
   
// }

// console.log(factorials(0));


// practice problem 8;

 
// function leap(year) {
//     if(year > 0 && year != String ){
        
//         if( year % 4 === 0){
//             console.log(" TRUE");
//         }
//         else{
//             console.log(" FALSE!!");   
//         }

//     } else(
//         alert("ERROR!! REWRITE THE YAER")
//     )
// }


// practice problem 9;

// function multiplication(a,b){

// if( a <= 0 || b <= 0){
//   throw new Error("its an negative value!")
// } else {
 
//   for( i = 1; i <= b; i++){
//       console.log(`${a} * ${i} = ${a * i}`)}
// }

// }

//  function multitable(table, tableRange) {

//   for( i = 1; i<=table*tableRange; i++){
//       console.log(i)}

//   }
 
//practice no 10

// function biggestOne(arr){
// if( arr === String || arr === undefined ){
//     throw new Error("we need some Array numbers!")
// }else{

//     let biggest = arr[0];
//     for(let i = 0; i < arr.length ; i++){
//         if(biggest < arr[i]){
//             biggest = arr[i]
//         }}
//         return biggest;
//  }

// }

// function big(arr){
//    let maximum =  Math.max(arr);
//    console.log(maximum);  
// }


// big([3,8,6,1])



// biggestOne([2,4,5,6])



//practice no 11

// 1st method

// function isPalindrome3(input){
//     let RevSttr =  input.split("").reverse().join("");
//     return RevSttr !== input ? false : true ;
// }

// // isPalindrome3('level');

// // 2nd method 

// function isPalindrome(input){

// for(let o = 0; o <= input.length / 2 ; o++){
    
//     if (input[o] !== input[input.length-1 - o]){
//         return false }
//     } return true }

// // isPalindrome('uncle');

// // 3rd method

// function isPalindrome2(input){
//     let start = 0;
//     let end = input.length-1;

//     for(start, end; start <= end / 2 ; start++, end--){
//         if(input[start] != input[end] ){
//             return false} }
//         return true;
// }


// isPalindrome2('madsam')

//practice no 10


// function exponents(n,m){
//     let calculations = n**m;
//     return calculations;
// }

// exponents(3,2)


// function checkng (base , exponents){
//     let result = 1;
//     for(let i=1; i <= exponents; i++){
//      result = result * base;
//     }
//     return result;
// }

// checkng (3 , 5)


// practical number 11;


// function VOW$checking(input){

// input = input.toLowerCase();
// const vowels = 'aeiou';
// const consonents = 'bcdfghjklmnpqrstvwxyz';

// let vowelsCount = 0;
// let consonentsCount = 0; 

// for(let i=0; i<input.length; i++){

//     if (vowels.includes(input[i])) {
//         vowelsCount++;
//     } else if (consonents.includes(input[i])) {
//         consonentsCount++;
//     }

// }  return {vowelsCount ,consonentsCount}

// }

// VOW$checking('ahmed');


// practical number 12;


// function factors(num){
  
// if(num = String){
//     throw new Error("Input should be a Number ");

// } else if (num < 0){
//     throw new Error("Input should be a Positive Number ");

// } 
// let result = [];

// for(let i=1; i<= num ; i++){
//     if(num % i === 0){
//         result.push(i)
//     }
//   }
// return result;
// }

// function finFectors(num) {
//     let result = [];
//     for(let i = 1; i <= num; i++) {
//         if(num % i === 0) {
//             result.push(i)
//         }
//     }
//     return result;
// } 


// practical no 13


// function FindAverage(inputArr){

// if( inputArr < 1 ){
//     throw new Error("Input Contains Only Positive numbers");

// } else if(inputArr === String){
//     throw new Error("Input Contains Only Array");

// } else { let summm = 0;

//     for(let i=0; i < inputArr.length; i++ ){    
//         summm += inputArr[i];
//     }
//        let resultss = summm /  inputArr.length;
//        return resultss; 
// }
// }


// // FindAverage(inputArr)


// practical no 14


// function simpleInterest( Amount, Rate, Years ){

// if(Amount || Rate || Years === Number){
//     console.log('Calculating the SIMPLE INTEREST ON LOAN ');

//     console.log('Amount of loan :', Amount);
//     console.log('Rate of Interest :', Rate);
//     console.log('Number of Years :', Years);
    
//     let SimpleInterestOnLOAN = Amount* Rate* Years / 100;
//     console.log('SimpleInterestOnLOAN :',SimpleInterestOnLOAN);
    
//     return SimpleInterestOnLOAN } 

//     // else {
//     //     throw new Error("ERROR 404!!")
//     // }
// }

// simpleInterest(2000,2,2)

// practical no 15

// function checkingPrime(input){

//    let prime = true;

//    for(let i=2; i<input; i++){

//     if( input % i === 0 ){
//         prime = false;
//         console.log(i);
//         break;
//     }
// }
//     return prime;
// }

// checkingPrime(10)


// function checkingPrime2(inputNum){
// let prime = true;
//     if(inputNum % 2 === 0){
//        prime = false;
// }

// if(prime = true){
//     for(let i= 3; i<inputNum; i=i+2 ){
//        if(inputNum % i === 0){
//               console.log(i);
//                prime = false;
//                 break;
//         }
//     }
// }
//     return prime;
// }

// checkingPrime2(inputNum) // 7

// practical no 16

// function counting(sentence){
   
// let spilttingWord = sentence.split(" ");
// spilttingWord.filter((el)=> { el != ""});
// // return spilttingWord;
// return spilttingWord.length;

// }

// counting("my name is ali!")
// counting("ROYAL COLLGE OF ARTS SCIENCE AND COMMERCE!")
// counting("ROYAL   COLLGE OF ARTS SCIENCE AND COMMERCE!")


// practical no 17

// function temperature(celcius){

// if( typeof celcius !== "number"){
//      throw new Error ("invalid output!")
//     } else {
//           let farehenheit = (celcius * 9/5) + 32;
//             return  Math.round(farehenheit);;
//     } 
// }



// practical no 18

// function sWaping(a,b) {
  
//     console.log("Numbers before the swaping are");
    
//    a = a+b;
//    b = a-b;
//    a = a-b;
     
//     console.log("Numbers after the swaping are");

//     return {a,b};
// }



// function sWaping(a,b) {
  
//     console.log("Numbers before the swaping are");
    
//    c = a; 
//    a = b;
//    b = c;
     
//     console.log("Numbers after the swaping are");

//     return {a,b};
// }

// sWaping(4,7)



// practical no 19


// isAmstrong(153)

// function isAmstrong(input){

// if(input === "str"){
//     throw new Error("error") } 
    
// let NewIn= input.toString();
// let sum = 0;

// for(let i=0 ; i<NewIn.length; i++){
//     sum += (parseInt(Math.pow(NewIn[i],NewIn.length)))
// }
//   return sum === input? true : false; }


// function amrStong(num) {
//     let strNum = num.toString(); 
//     let storage = 0;
//     for(let i = 0; i < strNum.length; i++) {
//         storage += (parseInt(Math.pow(strNum[i], strNum.length)))
//     }
//     console.log(storage)

//     return num === storage ? true : false;
// }


// practical no 20;

// function game(input) {
//     if (input < 0 || typeof (input) !== 'number'){        // <=== validation of not string 
//         throw new Error("Input should be positive integar");   
//     }

//         for(let i=1; i <= input; i++){

//             console.log(i);

//             if(i % 3 == 0){
//                 console.log(i ,'= FIZZ');
//             }else if(i% 5 == 0) {
//                 console.log(i,'= BUZZ');
//             }else if (i % 3 == 0 && i % 5 == 0){
//                 console.log(i,'= FIZZ BUZZ');
//             }

//         }

// }

// game(36);


// practical no 21;    (HARD ONE)

// function looping(input){
//    for(let i=1; i<=input; i++){

//       let lineContent = "";
    
//       for(let space=1; space <= input-i; space++){
//           lineContent = lineContent + " ";
//     }

//       for(let count=1; count <=i; count++){
//           lineContent += count;
//     }

//        for(let rev=i-1; rev >= 1; rev--){
//         lineContent += rev;
//     }

//     return (lineContent);
// }
// }


// practical no 22; 


// function repeat(input) {

//     let inn = input.toUpperCase();
//     let obj = {};                  // ek empty obj lunga jisme input ki value daal saku...


//     for(let i=0; i<=inn.length; i++){
//         console.log(inn[i]);

//         if(!obj[inn[i]]){      // obj ke andr each input value exist nahi karti to...
//             obj[inn[i]] = 0;    //  andr value daldo... 0
//         }
      
//         obj[inn[i]] = obj[inn[i]] + 1;   // fir uske baad uski value ko +1 se incrase krdo...
       
//     }

//     return obj;
// }

// repeat('ahmed');

//method 2;

// function counter(input){

//     input = input.toUpperCase().split("");
 
//     input.reduce((chr,val) => { 
//     console.log(chr);

//     if(!val[chr]){
//         val[chr] = 0;
//     }
//        val[chr] = val[chr] +1;
// return val;
    
//     },{});
// }

// counter('ali')


// practical no 23; 


// ( IMPORTANCE) 

// ASCII CHARCODE VALUE  ==> COMPUTER UNDERSTAND THE STRINGS VALUE IN THE NUMBERS 

// small     .charCodeAt();
// a = 97, 
// b = 98,...
// z = 122, 

// CAPITAL VALUE   .charCodeAt();
//  A = 65;
//  B = 66;
//  Z = 90;



// function aplhaOrder(input){

// input.toLowerCase();
// input.replace(/ /g, '');

// for(let i=0; i<input.length-1; i++ ){
    
//     if(input[i] > input[i+1]){
//       return false }
// }
//      return true;
// }

// aplhaOrder('ahmed')
// aplhaOrder('abcd')
// aplhaOrder('abzd')



// practical no 24;  // rearrange the words and make a another word known as the anamgram!!

// function anagrams(input1, input2){
   
//     if(input1.length != input2.length){
//        return false } 

//     let container1 = {};

//     for (let inp1 of input1){

//     if( !container1[inp1] ) {
//         container1[inp1] = 0;}

//     container1[inp1] =  container1[inp1] + 1 } 


//     let container2 = {};
  
//     for(let inp2 of input2){

//     if(!container2[inp2]){
//         container2[inp2] = 0;}

//     container2[inp2] =  container2[inp2] + 1; }

//    console.log(container1);
//    console.log(container2);

//   for(let key in container1){
//     if(container1[key]!== container2[key]){
//         return false;}
//   }

//   return true;

// }
// anagrams('cat','act');


// practical no 25;


// function perfectNumber(input){

// if( input <= 0 || typeof input !== 'number'){
//     throw new Error("404!");   
// }
//     let count = 0;

//    for(let i=1; i<input; i++){

//     if (input % i == 0 ) 
//     { count += i }
    
//    }

//    const result =  input === count ? true : false;

//    return result;
// }

// perfectNumber(6);


// practical no 26;

// function Password(input){

//    if(input.length < 8) { 
//     return false }

//    else {
 
//    const smallCapital = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
//    const largeCapital = ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
//    const numberInteger = '1234567890';
//    const special = '@!';
   
//    let smallCapitalExists = false;
//    let largeCapitalExists = false; 
//    let numberExists = false;
//    let specialExists = false;

//   for(let i=0; i<input.length; i++){

//     if(smallCapital.includes(input[i])){
//         smallCapitalExists = true;;
//     }

//     else if(largeCapital.includes(input[i])){
//         largeCapitalExists= true;
//     }

//     else if(numberInteger.includes(input[i])){
//         numberExists = true;
//     }

//     else if (special.includes(input[i])){
//         specialExists = true;
//     }
// }


//  return smallCapitalExists && largeCapitalExists && numberExists && specialExists ?  true :  false;

//     // if( smallCapitalExists && largeCapitalExists && numberExists && specialExists )
//     // { return true }
//     // else { return false }
// }
// }


// Password('ali@12');   /// error 
// Password('sHARIK!19');  // run
// Password('AHMEDali@12');  
 

// practical no 27;

// function tipCalculator(amt,percentage){
    
//     let arr = [];
//     percentage.forEach(per => {
        
//       let cal =  amt*per/100;
//       Math.floor(cal);

//     //   let convert = Intl.NumberFormat('en-INR', {
//     //   style : "currency",
//     //   currency : 'INR' })

//       arr.push(cal)
    
//     });

//     return arr;
// }

// // tipCalculator(1000,[5,10,15])
// // tipCalculator(2000,[5,10,15])
// tipCalculator(856,[5,10,15])


// practical no 28;


// function PalindromSubstrings(input){
// let check = input.split('').reverse().join('');
// return check = input ? true : false;
// }


// function find(substr){

//     let arr = [];

//     for(let i=0; i<substr.length; i++){

//     for(let j=i+1 ; j<= substr.length; j++){
//         let subs = substr.slice(i,j);

//         if(PalindromSubstrings(substr) && substr>1){
//             arr.push(substr);
//         }
//     }
// }
//     return arr;
// }

// find('maddam');
// PalindromSubstrings('ALIAHMED');


// practical no 29;


// function occurances(str,word){

// if(str || word !== String ){
//     throw new Error("errrrorrr!!");
// } else { 
// let BIGstr = str.trim();    
// let result = [];

// let pos =   BIGstr.indexOf(word)

// while (pos != -1){
//     result.push(pos);
//     pos = str.indexOf(word,pos+1);
    
// }
// return result}

// }


// occurances('    MY SON ALI IS FAT MAN & ALI LIVED IN MIRA ROAD   ','ALI')


// practical no 30;

// function Genertaor(){

// for(let i=0; i<=10; i++){
//     let number = Math.floor(Math.random()*10+1);
//     console.log(number);
// }
// }

// Genertaor();

// function user(){

// let takenInput = prompt('Enter your Number: ');
// console.log(takenInput);

// }


// practical no 31;

// function probability(dice,sides){

// const result = [];
   
//     let posbilty1 = Math.floor(Math.random()*dice+1);
//     let posbilty2 = Math.floor(Math.random()*sides+1);

//     result.push(posbilty1,posbilty2);

//     return result;
// }

// probability(2,4)
// probability(2,6)
// probability(3,4)




// function pos(sides){
//    return Math.floor(Math.random()*sides+1)
// }

// function probability(dice,sides){

// const result = [];

//     let count = 0;
//     while(count < dice){
//        let p1 =  pos(sides);
//         result.push(p1);
//         count++;
//     }

//   return result;
// }

// let a = parseInt(prompt(' Enter the number of dice :'));
// let b = parseInt(prompt(' Enter the number of sides:' ));

// probability(a,b);

// chatGPT...

// function pos(sides) {
//     return Math.floor(Math.random() * sides) + 1;
// }

// function rollDice(dice, sides) {
//     const result = [];
//     for (let count = 0; count < dice; count++) {
//         result.push(pos(sides));
//     }
//     return result;
// }

// let a = parseInt(prompt('Enter the number of dice:'));
// let b = parseInt(prompt('Enter the number of sides:'));

// if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
//     const rolls = rollDice(a, b);
//     console.log(`You rolled: ${rolls.join(', ')}`);
// } else {
//     console.log('Please enter valid numbers for dice and sides.');
// }


// practical no 32;

// let asumed = Math.floor(Math.random()*10+1);

// function guessing(){
//     let input = prompt('Enter the Guess number in between (1 to 10):');

//     console.log(asumed,input);

//     if(input == asumed){
//         return console.log('Congratulations! you guess correct one');

//     } else if (input+2 == asumed) {
//        return console.log('BIG');

//     } else if (input+1 == asumed) {
//         return console.log(' TOO close');
        
//     } else if(input-1 == asumed){
//         return console.log('TOO close'); 

//     } else if (input-2 == asumed) {
//         return console.log('SMALL');
        
//     }
// } 

//practical no 33;


// let details = prompt(`INFORMATION OF CALCULATOR
//             PRESS 1 FOR ADDITION
//             PRESS 2 FOR SUBSTRACTION
//             PRESS 3 FOR MULTIPLICATION 
//             PRESS 4 FOR DIVIDE 
//             PRESS 5 FOR EXIT    `);

// details = parseInt(details);

// let exit = false;

// while(!exit){
//         switch (details){

//                 case 1: 
//                         console.log('Addition');
//                         const add = userInpur();
//                         let resultAdd =   add.input1 + add.input2;   
//                         console.log(`Addition of two numbers are ${add.input1} + ${add.input2} = ${resultAdd}`);
//                         break;
                
//                 case 2: 
//                         console.log('substracrtion');
//                         const sub = userInpur();
//                         let resultSub =   sub.input1 - sub.input2;   
//                         console.log(`Substraction of two numbers are ${sub.input1} - ${sub.input2} = ${resultSub}`);
//                         break;
//                 case 3:  
//                         console.log('multiplay');        
//                         const multi = userInpur();
//                         let resultMulti =   multi.input1 * multi.input2;   
//                         console.log(`Multiplay of two numbers are ${multi.input1} * ${multi.input2} = ${resultMulti}`);
//                         break;
//                 case 4: 
//                         console.log('divide');
//                         const div = userInpur();
//                         let resultDivde =   div.input1 / div.input2;   
//                         console.log(`Divide of two numbers are ${div.input1} / ${div.input2} = ${resultDivde}`);
//                         break;        
//                 case 5:
//                         userInpur() 
//                         console.log('EXIT OF CALCULATOR!');
//                         console.log('THANKS FOR USING CALCULATOR!');
//                         exit = true 
//                         break;        
                
//                 }
                
//                 function userInpur(){
//                         let input1 =  prompt('Please Enter the two numbers for Mathamatical operations:');
//                         let input2 =  prompt('Please Enter the two numbers for Mathamatical operations:');
//                         parseInt(input1);
//                         parseInt(input2);
//                         return{input1,input2};
//                 }
// }


//practical no 34;

// const hour = inputUser('ENTER HOURS', 23 , 'ITS AN INVALID NUMBER');
// const minute =  inputUser('ENTER MINUTE', 59 , 'ITS AN INVALID NUMBER');

// function timer(hour,minute){
// const now = new Date();
// let curTime = new Date();
// curTime.setHours(hour);
// curTime.setMinutes(minute);

// let difference = curTime-now;
// if(difference < 0){
//     console.log('Re-set the Time');
//     return difference;}

// setTimeout(()=>{
//     return console.log('Alarm!! Alarm!! Alarm!!... ');
// },difference)

// }

// function inputUser( prompt_msg ,max, invalid_Msg ){
    
//     let result = null; 
//         while(result = null){
//            let result =  prompt(prompt_msg);
//            parseInt(result);
//            if( result < 0 || result === String || result > max ){
//             result = null;
//             console.log(invalid_Msg);
//            }
//         }
//         return;
//     }

