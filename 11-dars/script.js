// let bir = +prompt("son bir")
// let ikki = +prompt("son ikki")

// function hisob (a,b){
//   return a + b;
// }
// console.log(hisob(bir,ikki));








// let button = document.getElementById('button')
// let pp = document.getElementById('pp')


// function plus(a, b) {
//     let son1 = +document.getElementById('son1').value
//     let son2 = +document.getElementById('son2').value
//     let natija ;

//     natija = a + b;

//     pp.innerHTML = natija;
//    plus( son1 , son2)
// }

// button.onclick = plus


// let son1 = +document.getElementById('son1').value
// let son2 = +document.getElementById('son2').value
let button = document.getElementById('button')
let pp = document.getElementById('pp')
let natija = 0;


function plus(a, b) {
    let son1 = +document.getElementById('son1').value
    let son2 = +document.getElementById('son2').value
    natija = (a + b);
    pp.innerHTML = natija;
    plus(son1, son2)

}
button.onclick = plus
