// let olma = 'olma :';
// let olmaKg = 3;
// let olmaSale = 1000;

// // nok

// let nok = 'nok :';
// let nokKg = 5;
// let nokSale = 1500;

// // anor 

// let anor = 'anor :';
// let anorKg = 1;
// let anorSale = 1200;

// console.log( olma , olmaKg * olmaSale);

// console.log( nok ,nokKg * nokSale);

// console.log( anor , anorKg * anorSale);

// console.log('Jami narx :' , ( olmaKg * olmaSale ) + ( nokKg * nokSale ) + ( anorKg * anorSale )  );




// let olmaSale = 1000;
// let olmaKg = +prompt(' Olma narxi '  +  olmaSale  + ' som Necha kg olmoqchisiz ?');



// let nokSale = 2000;
// let nokKg = +prompt(' Nok narxi '  +  nokSale  + ' som Necha kg olmoqchisiz ?');

// let anorSale = 3000;
// let anorKg = +prompt(' Anor narxi '  +  anorSale  + ' som Necha kg olmoqchisiz ?');



// console.log(olmaKg * olmaSale + ' ming som ' + olmaKg + ' kg olma narxi');
// console.log(nokKg * nokSale + ' ming som  ' + nokKg + ' kg  nok narxi');
// console.log(anorKg * anorSale + ' ming som ' + anorKg + ' kg  anor narxi');
// console.log('Umumiy narx :', + (olmaKg * olmaSale) + (nokKg * nokSale) + (anorKg * anorSale) + ' ming som jami narx');


// let x1 = 'x1';
// let x2 = 'x2';
// confirm('X1 va X2 ni qiymatini aniqlaymiz ?')
// let a = +prompt('x1 ni koefisintini kiriting');
// let b = +prompt('x2 ni koefisintini kiriting');
// let c = +prompt('c ozod hadni kiriting');
// console.log( x1 , ( - b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a));
// console.log( x2 , ( - b - Math.sqrt((b * b) - 4 * a * c)) / (2 * a));



// //////////////////////////////////////////////////////////////////////


// 3- Mavzu Malumot turlari

// 1-String
// 2-Numbur
// 3-Bolean
// 4-Null
// 5-Undiafind
// 6-BigInt
// 7-Symbol


//  String
let mal = "hello word"
console.log(typeof (mal) + ' ' + mal);

// Number 
let num = 23;
console.log(typeof (num) + ' '  + num);

// Bolean 
let man = 0 < 3
console.log( typeof (man) + ' ' + man);

// Null bosh quti deb tasavur qilsak bo'ladi.

// Undifaind tugallanmagan o'zgaruvchi

// BigInt 16 ta raqamdan oshib ketsa ishlatamiz va oxirgi raqamdan keyin " n " harfini qo'shamiz

let son = 1234567891012131415n;
console.log(typeof(son)  + ' ' + son);

// Symbol faqatgina ozi oziga tenglik yana unical hisoblanadi misol uchun ( tg username : instagram username);

let bitta = Symbol(3);
console.log(typeof(bitta) , son == bitta);

  