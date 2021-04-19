// var val1 = prompt('Enter First Value: ');
// var sign = prompt('Enter operator Value: ');
// var val2 = prompt('Enter 2nd Value: ');
// console.log(val1+sign+val2);
// if ( sign === '+'){
//     alert((+val1)+(+val2));
// }else if(sign === '-'){
//     alert(val1-val2);
// }else if( sign === '*'){
//     alert(val1*val2);
// }else if(sign === '/'){
//     alert(val1/val2);
// }else if(sign === '%'){
//     alert(val1%val2);
// }else{
//     alert('Please enter + - * / %');
// }
// var a = [ 1,2,3];
// var b = a.slice(0,1);
// console.log(b);
// for (var a=1; a<=100; a=a+10){
//     for(b=a; b<=a+9; b++){
//         document.write(b + " ");
//     }
//     document.write('<br>');
// }
// var myName = prompt("Enter name");
// var firstChar = myName.slice(0,1);
// // console.log(myName);
// var secondChar = myName.slice(1);
// firstChar = firstChar.toUpperCase();
// secondChar = secondChar.toLowerCase();
// myName = firstChar+secondChar;
// var arr = ["Hamza","Fahad","Fiza"];
// for (var i = 0; i<=arr.length; i++){
//     if(myName === "Fiza"){
//         console.log("Name Found")
//     }else{
//         console.log('Not Found');
//     }
// }
// var arr = ["Hamza","Fahad","Fiza"];
// var arr = "Hamza";
// var arr1 = arr.slice(0,2);
// var check = prompt("Enter string!");
// var num = check.length;
// for( var i = 0; i < num; i++){
//     if ( check.slice(i,i+2) == "  "){
//         alert("Double Spaces Detected!");
//         break;
//     }
// }

var text = prompt("ENter the para!");
for (var i = 0; i < text.length; i++){
    if( text.slice(i,i+12) === "Hamza Safdar" ){
        // text.slice(0,i) where i= current index + text to be replacd + remaining text
        text = text.slice(0, i) + "Fiza Munir" + text.slice(i + 12);
        console.log(text);
    } 
}