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



















// let p = document.querySelector('#p');
// let input = document.querySelector('#input');
// let plus = document.querySelector('#plus');
// let plus2 = document.querySelector('#plus2');
// let minus = document.querySelector('#minus');
// let clear = document.querySelector('#clear');


// let a = 0;
// plus.onclick = function(){
//    return ++input.value
// }
// plus2.onclick = function(){
//     input.value = ++a + a;
// }
// minus.onclick = function(){
//      if (input.value < 1 ){
//         return  input.value;
//     }
//     else{
//         return --input.value;
//     }

// }

// clear.onclick = function(){
//     a = 0
//     input.value= a;
// }


let p = document.querySelector('#p');
let pp = document.querySelector('#pp');
let input = document.querySelector('#input');
let plus = document.querySelector('#plus');
let plus2 = document.querySelector('#plus2');
let minus = document.querySelector('#minus');
let clear = document.querySelector('#clear');


let a = 0;
plus.onclick = function () {
    if (++input.value > 2 && input.value < 5) {
        p.innerHTML = "O'ylab koring qimmatga tushasiz."
    }
    else if (input.value > 4 && input.value < 10) {
        p.innerHTML = " Knobka bosiloradi pulichi ??."
    }
    else {
        p.innerHTML = " O'ziz bilasiz !. " + input.value + " x"
    }
    pp.innerHTML = input.value * 300000 + " $";
}
plus2.onclick = function () {
    ++input.value + ++input.value;
    pp.innerHTML = input.value * 300000 + " $";

}
minus.onclick = function () {
    if (input.value > 0) {
        pp.innerHTML = (300000 * input.value)  - 300000  + " $";
        --input.value;

    }
}
clear.onclick = function () {
    pp.innerHTML = "0 $"
    return input.value = 0;
}


















