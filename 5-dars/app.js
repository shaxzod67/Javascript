// let kun = +prompt("1-dan 7 gacha bo'lgan hafta kunini kiriting");

// if (kun == 1 , "Dushanba") {
// 	console.log("Dushanba");
// } else if( kun == 2){
// 	console.log("Seshanba");
// } else if (kun == 3){
//   console.log("Chorshanba");
// }

// let a = +prompt(' 1- Jahon urush qachon bolgan')

// if (a == 1914) {
// 	console.log("To'g'ri")
// } else if (a > 1914) {
// 	console.log('Urushdan keyingi vaqt')
// } else if (a < 1914) {
// 	console.log('Urushdan oldingi vaqt')
// } else if (a == ) {
// 	console.log('yilni kiriting')
// }

// let a = +prompt('Qiymat kiriting ')

// if (a > 10) {
// 	console.log('Bu 10 dan katta sonlar ')
// } else if (a < 10) {
// 	console.log('Bu 10 dan Kichik sonlar ')
// } else if ((a = ' ')) {
// 	console.log('Siz hech qanday son kiritmadiz')
// } else {
// 	console.log('tamom')
// }

// Vazifa

// Klientdan yoshini surashyabdi kirishdan oldin
// agar klient yoshi 10 dan kichik bolsa, oynaga 'salom kichkintoy'deb chiqishi kerak
// agar klient yoshi 18 dan kichik bolsa unda salom mehmon
// agar klient yoshi 50 dan kichik bolsa unda salom amaki
// agar klient yoshi 100 kichik bolsa salom Bobo
// agar klient yoshi 110 baland bulsa buncha yosh yashalmaydi deb chiqishi kerak.

// let age = +prompt("Yoshingizni kirting");

// if ( age  <= 10){
// 	console.log("Salom kichkintoy");
// }
// else if ( age <= 18){
// 	console.log("salom mehmon");
// }
// else if ( age <= 50 ){
// 	console.log("salom amaki");
// }
// else if (age <= 100 ){
// 	console.log("salom bobo");
// }
// else {
// 	console.log("Bunday yoshdagi odam yoq");
// }

//  2

// Klientdan yoshini surashyabdi kirishdan oldin
// agar klient yoshi 1 dan katta 10 dan kichik bolsa, oynaga 'salom kichkintoy'deb chiqishi kerak
// agar klient yoshi 10 dan katta 18 dan kichik bolsa unda salom mehmon
// agar klient yoshi 18 dan katta 50 dan kichik bolsa unda salom amaki
// agar klient yoshi 50 dan katta 100 dan kichik bolsa salom Bobo
// agar klient yoshi 110 baland bulsa buncha yosh yashalmaydi deb chiqishi kerak.

// let age = +prompt('Yoshingizni kiriting')

// if (age > 1 && age <= 10) {
// 	console.log('salom')
// } else if (age > 10 && age <= 18) {
// 	console.log('Salom mexmon')
// }
// else if (age > 18 && age <=50 ){
// 	console.log("Salom amaki");
// }
// else if (age > 50 && age <= 110){
// 	console.log("salom bobo");
// }
// else if (age > 110){
// 	console.log('Bunday yoshdagi odam emas siz');
// }
// else{
// 	console.log( "yosh kiriting");
// }

// 3

// prompt surayabdi loginingizni yozing deb
// agar login admin bolsa unda parol suraladi
// agar parol 12345 bolsa hush kelibsz
// bulmasam parol xato
// agar admin bolmasa kirish man qilinadi

// let a = prompt('Login kiriting')
// let b = 'admin'
// let c = 12345
// if (a == b) {
// 	let p = +prompt('Parolni kiriting')
// 	if (p == c) {
// 		console.log('Siz tizimga kirdiz')
// 	} else {
// 		console.log('Notogri parol yozdiz')
// 	}
// } else {
// 	console.log('siz notogri login kiritdingiz')
// }

//  3

// 1) Age degan uzgaruvchi yaratibichiga hech nima qo'yilmasin;

// va klent olishini yozish kerak necha yosh yozmasin yoshi age uzgaruvchiga kiradiva keyin yoshiga qarab

// Agar yoshi 18 - 59 bo'lsa unda siz hali ishlashingiz kerak;

// Agar yoshi 59 dan  baland bo'lsa  unda pensiyaga chiqish vaqti bo'ldi;

// Agar malumotga 1 15 kelsa unda ishlashga vohli borib o'qing;

// let yosh = +prompt("Yilingizni yozing");
// let age = 2024 - yosh;
// if( age >= 1 && age <= 18){
// 	console.log("Siz hali oqishiz kerak");
// }
// else if ( age > 18 &&  age <= 59){
// 	console.log("Siz hozirgi vaqtda ishlash yoshidasiz");
// }
// else if(age > 59){
// 	console.log("Siz nafaqa yoshdasiz");
// }
// else {
// 	console.log("Siz tug'ulmagansiz");
// }

// 4 Fasl vazifa
// let a = +prompt("Oy faslini sonini kiriting");

// if ( a >= 1 && a < 4 ){
// 	console.log("Qish Fasli");

// }
// else if( a >= 4 && a < 7 ){
// 	console.log("Bahor fasli");
// }
// else if( a >= 7 && a < 10 ){
// 	console.log("Yoz fasli");
// }
// else if( a >= 10 && a < 13 ){
// 	console.log("Kuz fasli");
// }
// else{
// 	console.log("Bunday Fasl yoq");
// }

// Shart operatori bo'yicha topshiriqlar

// A sondagi qiymat [-5,3] diapozon ichidami ?

// let a = +prompt('A sonni kiriting U [-5,3] oraligidami ?')

// if (a >= -5 && a <= 3) {
// 	console.log('Bu [-5,3 orakiqdagi son]');

// }
// else {
// 	console.log('bu yoq')
// }



// 3 xonali son berilgan. uning raqamlari orasida 2 bormi? 7 chi ? 3 chi ?
// Eldor ning yoshi X, Aziza ning yoshi – Y. Ularning o’rtacha yoshini aniqlang va har bir bolaning o’rtacha yoshdan farqini toping
// A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni musbat”
// A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni juft”
// A soni berilgan. Quyidagi gapni to’g’ri yoki notog’riligini isbotlang. “A soni 5 ga karrali”
// A va B sonlar berilgan. Quyidagi gapni tekshiring: “A > 2 va B<=3”
// A, B va C sonlar berilgan. Quyidagi ifoda to’g’rilini isbotlang. A < B < C
// A va B sonlar berilgan. Quyidagi ifodani tekshiring: “A va B lar biri toq”
// A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda o’zgarishsiz qolsin. Natijani chop eting
// A soni berilgan. Agarda musbat bo’lsa qiymati birga oshirilsin, aks holda ikkiga kamaytirilsin. Natijani chop eting
// A soni berilgan. Agarda musbat bo’lsa qiymati ikki barobar oshirilsin, aks holda 2 ga kamaytirilsin, agarda 0 ga teng bo’lsa, qiymatini 10 bilan almashtirilsin. Natijani chop eting
// A va B sonlar berilgan. Ularning orasidan kattasini hisoblang
// A, B va C sonlar berilgan. Ularning orasidan eng kichkinasi topilsin
// N soni berilgan. N ga to’g’ri keluvchi hafta kunini chop eting
// M soni berilgan. M ga to’g’ri keluvchi oy nomini chop eting
// Y soni berilgan. Berilgan Y qiymatdagi yilning kabisaligini tekshiring
// Berilgan 6 xonali son "baxtli son" mi ? ya'ni boshidagi 3 ta raqamlar yigindisi keyingi 3 ta raqam yigindisi bilan bir xillikka tekshiring
// Bokschining vazni berilgan. Vazn qiymatiga qarab. Yengil vazn (60gacha), Birinchi o’rta vazn (64gacha), O’rta vazn (69gacha). Qaysi kategoriyaga to’g’ri kelishini aniqlang
