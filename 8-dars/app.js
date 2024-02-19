// for (let i = 1; i <= 10; i++) {
// 	console.log(i)
// }

// let a = +prompt('Tezlikni kiriting !')
// let sum = 365
// if (a <= 70){
// 	document.write("Sizda jarima yoq");
// }
//  else if (a > 70 && a <= 80) {
// 	document.write(
// 		'Siz ' +
// 			a +
// 			' tezlik bilan harakatlanib ' +
// 			sum +
// 			" ming so'm jarimaga tushdingiz"
// 	)
// }
//  else if (a > 80 && a <= 90) {
// 	document.write(
// 		' Siz ' +
// 			a +
// 			' tezlik bilan harakatlanib ' +
// 			(sum * 2 )+
// 			" ming so'm jarimaga tushdingiz"
// 	)
// } else if (a > 90 && a <= 110) {
// 	document.write(
// 		' Siz ' +
// 			a +
// 			' tezlik bilan harakatlanib ' +
// 			(sum * 5) +
// 			" ming so'm jarimaga tushdingiz"
// 	)
// } else if (a > 110) {
// 	document.write(
// 		' Siz ' +
// 			a +
// 			' tezlik bilan harakatlanib ' +
// 			(sum * 10) +
// 			" ming so'm jarimaga tushdingiz"
// 	)
// }

// let input = document.getElementById('input')
// let button = document.getElementById('button')
// let span = document.getElementById('span')

// function hisob (){
// 	let input = document.getElementById('input').value
// 	let a = 0
//     for( let i = 0 ; i <= input; i++){
// 			a += i
// 		}
// 	span.innerHTML = a
// }
// button.onclick = hisob

let input = document.getElementById('input')
let inputNom = document.getElementById('inputNom')
let span = document.getElementById('span')
let button = document.getElementById('button')

function hisob() {
	let input = document.getElementById('input').value
	let inputNom = document.getElementById('inputNom').value
	let a = ' '
	if (input < 70) {
		span.innerHTML = " Sizda jarimalar yo'q"
	}
	else if (input > 70 && input <= 80) {
		span.innerHTML = "Siz " + input + " km/s tezlik bilan " + (inputNom * 1) + " ming so'm jarimaga tushdingiz"
	}
	else if(input > 80 && input <=90){
		span.innerHTML = "Siz " + input + " km/s tezlik bilan " + (inputNom * 2) + " ming so'm jarimaga tushdingiz"
	}
	else if ( input > 90 && input <= 110){
		span.innerHTML = "Siz " + input + " km/s tezlik bilan " + (inputNom * 5) + " ming so'm jarimaga tushdingiz"
	}
	else {
		span.innerHTML = "Siz " + input + " km/s tezlik bilan " + (inputNom * 10) + " ming so'm jarimaga tushdingiz"
	}
	// span.innerHTML = son
}
button.onclick = hisob

