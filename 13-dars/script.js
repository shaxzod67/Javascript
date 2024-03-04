// function Func(name, surname , age ,married ,hairColor){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.married = married;
//     this.hairColor = hairColor
// }

// let ism = prompt("ism")
// let fam = prompt("fam")
// let yosh = prompt("yosh")
// let oila = prompt("oila")
// let soch = prompt("soch")


// let func1 = new Func (ism,fam, yosh, oila, soch);
// console.log(func1);



















let p = document.querySelector('#p');
let input = document.querySelector('#input');
let input1 = document.querySelector('#input1');
let plus = document.querySelector('#plus');
let plus2 = document.querySelector('#plus2');
let minus = document.querySelector('#minus');
let clear = document.querySelector('#clear');


let a = 0;
plus.onclick = function(){
   return ++input.value
}
plus2.onclick = function(){
    input.value = ++a + a;
}
minus.onclick = function(){
     if (input.value < 1 ){
        return  input.value;
    }
    else{
        return --input.value;
    }
   
}

clear.onclick = function(){
    a = 0
    input.value= a;
}

















