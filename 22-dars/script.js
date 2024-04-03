// let pp = document.querySelector('#pp');
// let name = document.querySelector('#name');
// let date = document.querySelector('#date');
// let ball = document.querySelector('#ball');
// let btn = document.querySelector('#btn');
// let data = document.querySelector('#data');
// let form = document.querySelector('#form');
// let del = document.querySelector('#bxs-trash');

// const mall = [];
// form.addEventListener("submit", function (qaytarish) {
//     qaytarish.preventDefault();
//     console.log("Hello");
//     tekshirish();
// });

// function tekshirish() {
//     if (name.value == "" || date.value == "" || ball.value == "") {
//         pp.style.color = "red";
//         return pp.innerHTML = "Malumotni to'liq kiriting"
//     }
//     else {
//         pp.style.color = "green";
//         pp.innerHTML = "Malumot yuborildi"
//     }
//     ozgarish();
// }

// function ozgarish() {
//     mall.push(
//         {
//             name: name.value,
//             date:date.value,
//             ball:ball.value,
//         }
//     )
//     console.log(mall);
//     korsatish();
// }

// function korsatish(){
//     data.innerHTML = "";
//     mall.map(function(ozgrvc , index){
//         data.innerHTML += `
//         <td>${index + 1}</td>
//         <td>${ozgrvc.name}</td>
//         <td>${ozgrvc.date}</td>
//         <td>${ozgrvc.ball}</td>
//         <td><i class='bx bxs-edit'></i></td>
//         <td><i class='bx bxs-trash'></i></td>
//         `
//     })
// }



let pp = document.querySelector('#pp');
let name = document.querySelector('#name');
let date = document.querySelector('#date');
let ball = document.querySelector('#ball');
let btn = document.querySelector('#btn');
let form = document.querySelector('#form');
let data = document.querySelector('#data');


const mall = [];
form.addEventListener('submit', function (qayt) {
    qayt.preventDefault();
    tek();
    console.log("hello");
});

function tek() {
    if (name.value == "" || date.value == "" || ball.value == "") {
        pp.style.color = "red";
        return pp.innerHTML = "Malumotni toliq kiriting "
    }
    else {
        pp.style.color = "green";
        pp.innerHTML = "Malumot kiritildi";
    }
    elon();
}
function elon() {
    mall.push(
        {
            name: name.value,
            date: date.value,
            ball: ball.value,
        }
    )
    oqish();
}

function oqish() {
    data.innerHTML = '';
    mall.map(function (value, index) {
        data.innerHTML += `
     <td>${index + 1}</td>
     <td>${value.name}</td>
     <td>${value.date}</td>
     <td>${value.ball}</td>
     <td><i class='bx bxs-edit'></i></td>
     <td><i class='bx bxs-trash'></i></td>
    `
    })
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("ball").value = "";

}


