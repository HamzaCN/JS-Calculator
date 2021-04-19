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
for (var a=1; a<=100; a=a+10){
    for(b=a; b<=a+9; b++){
        document.write(b + " ");
    }
    document.write('<br>');
}