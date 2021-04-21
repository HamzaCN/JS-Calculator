


var val1 = prompt('Enter First Value: ');
var sign = prompt('Enter operator Value: ');
var val2 = prompt('Enter 2nd Value: ');
console.log(val1+sign+val2);
if ( sign === '+'){
    alert((+val1)+(+val2));
}else if(sign === '-'){
    alert(val1-val2);
}else if( sign === '*'){
    alert(val1*val2);
}else if(sign === '/'){
    alert(val1/val2);
}else if(sign === '%'){
    alert(val1%val2);
}else{
    alert('Please enter + - * / %');
}
var a = [ 1,2,3];
var b = a.slice(0,1);
console.log(b);
for (var a=1; a<=100; a=a+10){
    for(b=a; b<=a+9; b++){
        document.write(b + " ");
    }
    document.write('<br>');
}
var myName = prompt("Enter name");
var firstChar = myName.slice(0,1);
// console.log(myName);
var secondChar = myName.slice(1);
firstChar = firstChar.toUpperCase();
secondChar = secondChar.toLowerCase();
myName = firstChar+secondChar;
var arr = ["Hamza","Fahad","Fiza"];
for (var i = 0; i<=arr.length; i++){
    if(myName === "Fiza"){
        console.log("Name Found")
    }else{
        console.log('Not Found');
    }
}
var arr = ["Hamza","Fahad","Fiza"];
var arr = "Hamza";
var arr1 = arr.slice(0,2);
var check = prompt("Enter string!");
var num = check.length;
for( var i = 0; i < num; i++){
    if ( check.slice(i,i+2) == "  "){
        alert("Double Spaces Detected!");
        break;
    }
}
for (var i = 0; i < text.length; i++){
    if( text.slice(i,i+12) === "Hamza Safdar" ){
        // text.slice(0,i) where i= current index + text to be replacd + remaining text
        text = text.slice(0, i) + "Fiza Munir" + text.slice(i + 12);
        console.log(text);
    } 
}
var text = prompt("ENter the para!");
var indxNum = text.indexOf("Hamza Safdar");
var firstText = text.slice(0,indxNum);
var secondText = text.slice(indxNum+12);
var replaceText = "Fiza Minir";
console.log(firstText+replaceText+secondText);
function sum(a,b){
    return a+b;
}
var a = "Hamza";
var para = "My name is Fiza";
var para1 = para.replace('Fiza','Hamza');
const getSleepHours = day =>{
    switch(day){
      case 'monday':
      return 8;
      break;
    }
  
  }
const getSleepHours = day =>{
    switch(day){
      case 'Monday':
      return 8;
      break;
      case 'Tuesday':
      return 7;
      break;
      case 'Wednesday':
      return 7;
      break;
      case 'Thursday':
      return 7;
      break;
      case 'Friday':
      return 7;
      break;
      case 'Saturday':
      return 7;
      break;
      case 'Sunday':
      return 7;
      break;
    }
  
  };
  const getActualSleepHours = () =>{
  
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  };
  const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours * 7;
  };
   console.log(getActualSleepHours());
   console.log(getIdealSleepHours());
  const calculateSleepDebt = () =>{
   let actualSleepHours = getActualSleepHours();
   let idealSleepHours = getIdealSleepHours();
   if( actualSleepHours == idealSleepHours){
     console.log('user got the perfect amount of sleep');
   }else if( actualSleepHours > idealSleepHours){
     console.log('e user got more sleep than needed');
   }else if( actualSleepHours < idealSleepHours){
     console.log('user should get some rest.');
   }
  };
  calculateSleepDebt();
const sleepTimer = (alarm) => {
    console.log('My alarm is set for: ' + alarm);
  }
   
  sleepTimer('8:30AM');
  // The scope of `random` is too loose 

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
       days = 50;
    } else if (event === 'Triathlon') {
       days = 100;
    } else if (event === 'Pentathlon') {
       days = 200;
    }
  
    return days;
  };
   const name = 'Nala';
  // The scope of `name` is too tight 
  const logEvent = (name,event) => {
   
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
  logEvent(name, event);
  logTime(name, days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);