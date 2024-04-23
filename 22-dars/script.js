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



// let pp = document.querySelector('#pp');
// let name = document.querySelector('#name');
// let date = document.querySelector('#date');
// let ball = document.querySelector('#ball');
// let btn = document.querySelector('#btn');
// let form = document.querySelector('#form');
// let data = document.querySelector('#data');


// const mall = [];
// form.addEventListener('submit', function (qayt) {
//     qayt.preventDefault();
//     tek();
//     console.log("hello");
// });

// function tek() {
//     if (name.value == "" || date.value == "" || ball.value == "") {
//         pp.style.color = "red";
//         return pp.innerHTML = "Malumotni toliq kiriting "
//     }
//     else {
//         pp.style.color = "green";
//         pp.innerHTML = "Malumot kiritildi";
//     }
//     elon();
// }
// function elon() {
//     mall.push(
//         {
//             name: name.value,
//             date: date.value,
//             ball: ball.value,
//         }
//     )
//     oqish();
// }

// function oqish() {
//     data.innerHTML = '';
//     mall.map(function (value, index) {
//         data.innerHTML += `
//      <td>${index + 1}</td>
//      <td>${value.name}</td>
//      <td>${value.date}</td>
//      <td>${value.ball}</td>
//      <td><i class='bx bxs-edit'></i></td>
//      <td><i class='bx bxs-trash'></i></td>
//     `
//     })
//     document.getElementById("name").value = "";
//     document.getElementById("date").value = "";
//     document.getElementById("ball").value = "";

// }










// let pp = document.querySelector('#pp');
// let name = document.querySelector('#name');
// let date = document.querySelector('#date');
// let ball = document.querySelector('#ball');
// let form = document.querySelector('#form');
// let btn = document.querySelector('#btn');
// let data = document.querySelector('#data');

// const mall = [];
// form.addEventListener('submit', function (saqlash) {
//     saqlash.preventDefault();
//     tekshirish();
// });

// function tekshirish() {
//     if (name.value == '' || date.value == '' || ball.value == '') {
//         pp.style.color = 'red';
//         return pp.innerHTML = "Malumotni toldiring"
//     } else {
//         pp.style.color = 'green';
//         pp.innerHTML = "Malumot  yuborildi"
//     }
//     qabulQilish();
// }
// function idTopish(mall){
//    if(!mall.length){
//     return 1;
//    }else{
//     return mall[mall.length - 1].iD + 1;
//    }
// }
// function qabulQilish() {
//     mall.push(
//         {
//             iD:idTopish(mall),
//             ism: name.value,
//             sana: date.value,
//             baho: ball.value,
//         }

//     )
//     localStorage.setItem('bir' , JSON.stringify(mall));
//     console.log(mall);
//     korsatish();
// }

// function ochirish(iD){
//     let ocr = mall.findIndex( function(topId){
//         return topId.id === iD;
//     })
//     mall.splice(ocr,1);
//     korsatish();
// }


// function korsatish() {
//     data.innerHTML = "";
//     mall.map(function (value, index) {
//         data.innerHTML += `
//         <td>${index + 1}</td>
//         <td>${value.ism}</td>
//         <td>${value.sana}</td>
//         <td>${value.baho}</td>
//         <td><i class='bx bxs-edit'></i></td>
//         <td><i onclick = ochirish(${value.id}) class='bx bxs-trash'></i></td>
//         `
//     })
//     document.getElementById("name").value = "";
//     document.getElementById("date").value = "";
//     document.getElementById("ball").value = "";
// }




let pp = document.querySelector('#pp');
let name = document.querySelector('#name');
let date = document.querySelector('#date');
let ball = document.querySelector('#ball');
let form = document.querySelector('#form');
let btn = document.querySelector('#btn');
let data = document.querySelector('#data');


// ========= editModal =======
let editModal = document.querySelector('#editModal');
let modal__content = document.querySelector('.modal__content');
let closeModal = document.querySelector('.modal__close');
let edit__todo__form = document.querySelector('.edit__todo__form');
let editInput = document.querySelector('#editInput');
let button__edit__todo = document.querySelector('.button__edit__todo');

let backend = [];
form.addEventListener('submit', function (qaytarish) {
    qaytarish.preventDefault();
    tekshirish();
});
function tekshirish() {
    if (name.value == '' || date.value == '' || ball.value == '') {
        pp.style.color = 'red';
        pp.textContent = 'Malumotni toldiring'

    }
    else {
        pp.style.color = 'green';
        pp.textContent = 'Malumot yuborildi'
        oqish();
    }
}


//================  edit start   ===============
editInput.addEventListener('submit', function (event) {
    event.preventDefault();
    const todoId = editInput.dataset.todoId;
    if (editInput.value == "") {
        pp.innerHTML = "xato"
        return;
    } else {
        pp.innerHTML = 'ishladi'
        updateEditData(editInput.value, todoId);
    }
});
function updateEditData(editInp, raqam) {
    let todoIndex = data.findIndex(function (todoId){
        return todoId.raqam === raqam;
    });

    data[todoIndex].name = editInp;
    localStorage.setItem('data' , JSON.stringify(data));
    korsatish();
    hideModal();

}
function showModal(name,todoId){
    editModal.style.display = "flex";
    editInput.value = name;
    editInput.dataset.todoId = todoId;
    console.log('hello');
}

function hideModal(){
    editInput.style.display = "none";
}

closeModal.addEventListener('click' , function(){
    hideModal();
})
function editData(raqam){
    let idx = data.find(function(id2){
        return id2.raqam === raqam;
    });
    showModal(idx.name , raqam)
}





//================  edit end   =================
function belgilash(backend) {
    if (!backend.length) {
        return 1;
    } else {
        return backend[backend.length - 1].iD + 1;
    }
}

function oqish() {
    backend.push(
        {
            iD: belgilash(backend),
            ism: name.value,
            sana: date.value,
            baho: ball.value,
        }
    )
    localStorage.setItem('son', JSON.stringify(backend));
    korsatish();

}
function ochirish(iD) {
    localStorage.setItem('son', JSON.stringify(backend));
    let ochr = backend.findIndex(function (izlash) {
        return izlash.raqam === iD;
    });
    backend.splice(ochr, 1);
    localStorage.setItem('son', JSON.stringify(backend));
    korsatish();

}
(function () {
    backend = JSON.parse(localStorage.getItem('son'))
    korsatish();
})();

function korsatish() {
    data.innerHTML = ' ';
    backend.sort(function (a, b) { return (b.baho - a.baho) }).map(function (value, index) {
        data.innerHTML += `
        <td>${index + 1}</td>
        <td>${value.ism}</td>
        <td>${value.sana}</td>
        <td>${value.baho}</td>
        <td><i onclick = showModal(${value.raqam}) class='bx bxs-edit'></i></td>
        <td><i  onclick = ochirish(${value.raqam}) class='bx bxs-trash'></i></td>
        `
    });
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("ball").value = "";
}