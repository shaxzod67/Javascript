// let x1 = 'x1';
// let x2 = 'x2';
// confirm('X1 va X2 ni qiymatini aniqlaymiz ?')
// let a = +prompt('x1 ni koefisintini kiriting');
// let b = +prompt('x2 ni koefisintini kiriting');
// let c = +prompt('c ozod hadni kiriting');
// console.log( x1 , ( - b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a));
// console.log( x2 , ( - b - Math.sqrt((b * b) - 4 * a * c)) / (2 * a));




let olmaKg = +prompt("Olma narxi 100 so'm necha kg olasiz ?");
let olmaSale = 100;
let uo = (olmaKg * olmaSale);


let nokKg = +prompt("Nok narxi 200 so'm necha kg olasiz ?");
let nokSale = 200;
let un = (nokKg * nokSale);

let anonKg = +prompt("Anor narxi 300 so'm  necha kg olasiz ?");
let anorSale = 300;
let ua = (anonKg * anorSale);

console.log( uo + un + ua);
