
//  1 - Join va tostring bu ikki metod massivlarni stringga o'zgartirib beardi.
// let nom = ['Shaxzod' , 'Olimjonov' , 'Usmon' , '23'];

// let nomString = nom.join(' ')
// console.log(nomString);

////////////////////////////////////concat///////////////////////////////////

//  2 - concat Bu metod 2 va undan ortiq  massivlarni bir biriga qo'shib beradi.

// let nom  = ['shaxzod' , 'Olimjonov' , 'Ozod ogli' , 23];
// let nom1  = ['Uchqun' , 'Xurramov' , 'Tolmas ogli' , 21];
// let nom3  = ['oybek' , 'Hasanov' , 'Otabek ogli' , 24];

// let nomPlus = nom.concat(nom1 ,nom3);
// console.log(nomPlus);

//////////////////////////////////////splice/////////////////////////////////

//  3 - splice bu massivni index raqami oraligini belgilaydi va shu ichki oraliqni kesib tashab tashqi oraliqni chiqaradi va unga ozimz yana array qosha olamiz.
// let nom  = ['shaxzod' , 'Olimjonov' , 'Ozod ogli' , 23];
// nom.splice(1 , 2);
// console.log(nom);

//////////////////////////////////////slice/////////////////////////////////


//  4 - slice bu massivni index raqami oraligini belgilaydi va shu ichki oraliqni kesib oladi tashqi oraliqni ochiradi va ichgi oraliqni chiqaradi n dan m gacha bolib ishlaydi unga ozimiz yana array qosha olmaymiz.
// let nom  = ['shaxzod' , 'Olimjonov' , 'Ozod ogli' , 23];
// let slice = nom.slice(0 ,2 , 'hw');
// console.log(slice);

//////////////////////////////////////indexOf/////////////////////////////////

// 5 - bu indexOf array ichidagi malumotni yozamiz va u bizga u boshidan izlab nechanchi indexligini chiqaradi 
// 6 - bu lastindexOf array ichidagi malumotni yozamiz va u oxiridan izlab bizga u nechanchi indexligini chiqaradi 

// let nom  = ['shaxzod' , 'Olimjonov' , 'Ozod ogli' , 23];
// let index = nom.lastIndexOf(23);
// console.log(index);

//////////////////////////////////////Flat/////////////////////////////////

//  7 - flat metodi massiv ichidagi massivni bitta umumit katta massiv qilishga yordam beradi
// let nom  = [1 ,2 , 3 , 4,[5,6 ,[7,[8]],9, ],10];
// let flat = nom.flat(3);
// console.log(flat);


//////////////////////////////////////forEach/////////////////////////////////

//  8 - forEach metodi sikl bulib ishlaydi va massivning uzunligi tugagandan song false qiymat qaytsa tohtaydi.
// let nom  = ['Shaxzod' , 'Olimjonov' , 'Ozod ogli' , 23];
// let num = 0 ; 
//     nom.forEach( n => {
//         num++
//     console.log( num,n);
// })


//////////////////////////////////////map/////////////////////////////////

//  9 - map metodi sikl bulib ishlaydi va massivning uzunligi tugagandan song false qiymat qaytsa tohtaydi , u ozidan massiv qaytaradi.
// let nom = [18, 36, 83, 23];
// let mab = nom.map((n) => n * 2)
// console.log(mab);

//////////////////////////////////////Filter/////////////////////////////////

//  10 -filter mitod massivni ichidan oziga kerakli narsani qidiradi va topsa chiqaradi.
// let fil = [
    
//        {ism:"Shahzod", familya: "Olimjonov",yosh: 20},
//        {ism:"Komil",   familya: "Baxromov", yosh: 18} ,
//        {ism:"Komil",   familya: "Yusupov",  yosh: 12} ,
    
// ];
// let filtr = fil.filter((p) => p.yosh == 20);
// console.log(filtr);

//////////////////////////////////////reduce/////////////////////////////////

//  11 - Reduce metodi massiv ichidagi numberlarni yigindisi va eng katta va kichiklarni topishda ishlatilinadi. 
// let nom = [4,5,6,7,78,21,98];

// let hisob = nom.reduce((a , b) => Math.max(a,b) );
// console.log(hisob);


//////////////////////////////////////Some/////////////////////////////////

//  12 - some metodi bu massiv ichidagi qiymatlarni taqqoslashga ishlatilinadi.
// let num = [1,2,3,4,5,6,7,8,9];

// let taq = num.some((n) => n * 2 > 17);
// console.log(taq);

//////////////////////////////////////every/////////////////////////////////

//  13 - every metodi bu massiv ichidagi eng kichik qiymatni olib taqqoslaydi.
// let num = [7,8,9];

// let taq = num.every((n) => n  > 7 );
// console.log(taq);


//////////////////////////////////////sort/////////////////////////////////

//  14 - sort metodi massiv ichidagi text busa alfbo tartibda raqam bolsa ketma ketlik tartibda ifodalab beradi
// let num = [7,8,9,2,4,8,44 , 1, 56,];
// let son = num.sort((a,b) => a - b )
// console.log(son);

// let num1 = ['shahzod','olimjonov','dilshod','asil'];
// let son1 = num1.sort()
// console.log(son1);
