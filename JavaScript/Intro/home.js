console.log("Hello");
//alert("Beenish Chaudhry");

//Variables
var b = 'smoothie';
console.log(b);

var someNumber=45;
console.log(someNumber);

//Manipulate DOM with JavaScript
/* changing HTML with JavaScript*/

//document.getElementById('someText').innerHTML = "Hey There";
//let age = prompt("What is your age");
//document.getElementById('someHeading').innerHTML = age;

//Numbers in JavaScript
 var num1 = 5;
 //increment num1 by 1
 num1++;
  //decrament num1 by 1
 num1--;
  console.log(num1);

  // Divide ,multiply * , remainder %
  console.log(num1 + " + " + " 6 =" ,num1 + 6);
  console.log(num1 + " - " + " 6 =" ,num1 - 6);
  console.log(num1 + " * " + " 6 =" ,num1 * 6);
  console.log(num1 + " / " + " 6 =" ,num1 / 6);
  console.log(num1 + " % " + " 6 =" ,num1 % 6);
  


  //Functions 
   function fun(){
       alert("This is the Function ");
   }

   //fun();
  // var name = prompt("Whats is your name?");
   function greeting(nameInput){
       var result = "Hello  " + nameInput;
       console.log(result);
   }
    
  // greeting(name);


   //How do argument work in functions?

   //adding two numbers in function 

   function sumNumbers(num1,num2){
       var result = num1 + num2 ;
       console.log(result); 
   }

   sumNumbers(10,10);
   sumNumbers('10','10');
   sumNumbers("Hello "," Beenish");
   
   //while loops

   var num = 0 ;
   while (num < 10 ){
       num += 1;
       console.log(num);
   }
    //For loop

    for (let num = 0 ; num < 10 ; num++)
    {
        console.log(num);
    }

    //Data Types 
     
     let Age = 22; //number
     let  Name = 'Beenish' //string 
     let  fullname= {first:"Beenish" , last:"Chaudhry"}; //object 
     let truth = false; //boolean 
     let groceries = ['apple', 'banana' , 'oranges']; //array 
     let random; //undefined
     let nothing= null; //value null 

     //Strings  in JavaScript (Common Mthods)
      let fruit = "apple";
      let moreFruits = "apple\napple" // newline 
      console.log(fruit.length);
      console.log(fruit.indexOf('ple'));
      console.log(fruit.slice(2,6));
      console.log(fruit.replace("app",123));
      console.log(fruit.toUpperCase());
      console.log(fruit.toLowerCase());
      console.log(fruit.charAt(2));
      console.log(fruit[1]);
      let fruits = "banana,apple,orange,blackberry";
      console.log(fruit.split('')); //split by characters 
      console.log(fruits.split(',')); //split by comma 



      //Array

      let Fruits = ['banana','apple','orange','pineapple'];
      Fruits = new Array('banana','mango','orange','pineapple');

      console.log(Fruits[1]);
      console.log(Fruits);

      Fruits[0] = 'pear';
      console.log(Fruits);

      for(let i=0 ; i < Fruits.length ;  i++)
      {
          console.log(Fruits[i]);
      }

      //Array Common Methods 
     console.log('to String ',Fruits.toString());
     console.log(Fruits.join(' * '));
     console.log(Fruits.join(' - '));
     console.log(Fruits,Fruits.pop(),Fruits); //remove last items
     console.log(Fruits.push('blackberries '),Fruits);  // 
     Fruits[Fruits.length] = 'Strawberry'; //same as push
     console.log(Fruits);

     Fruits.shift(); //remove first element from a array
     console.log(Fruits);

     Fruits.unshift('kiwi'); //add first element to a array
     console.log(Fruits);


     let Vegetables = [ 'asparagus' , 'tomato' ,'brocoli'];
      let alGloceries = Fruits.concat(Vegetables); 
      console.log(alGloceries);
      console.log(alGloceries.slice(1,4));

      console.log(alGloceries.reverse());
      console.log(alGloceries.sort());



      let someNumbers = [5,10,2,25,3,255,1,2,5,334,321,2];
      console.log(someNumbers.sort());
      console.log(someNumbers.sort(function(a,b){ return a-b})); //sorted in ascending  order
      console.log(someNumbers.sort(function(a,b){ return b-a})); //sorted in descending  order


      let emptyArray = new Array();
       for (let num1 = 0 ; num1 < 10 ; num1++){
           emptyArray.push(num1);
       }
       console.log(emptyArray);


       //Objects in JavaScript 
       //dictionaries in Python

       let student = {
           first: 'Beenish', 
           last: 'Chaudhry',
           age: 23,
           studentInfo: function(){
               return this.first + '\n' + this.last; 
           }
        };
       console.log(student.first);
       
       student.first = 'notBeenish';
       console.log(student.first);
       console.log(student.studentInfo());


       //Conditionals , Controls flows (if else)
       //18-35 is my Target
       var Tage = 23;
       if((Tage>=18) && (Tage <=35)){
           result = "Target demo"; 
       }
       else{
           result = "Not in Target";
       }
       console.log(result)


    //switch statements
    //differentiate between weekday vs weekend
    /*
     day 0 -->  Sunday --> weekend
     day 6 -->  saturday --> weekend
     day 4 --> Thursday --> weekday    */  
      let day = 1; 

    switch(day){
        case 0:
            text = 'weekend';
            break;
        case 5:
            text = 'weekend';
            break;
        case 6:
            text='weekend';
        default:
            text = 'weekday';
    }
    console.log(text);








      






