

let img =document.querySelectorAll('img');
let ol = document.getElementById('ol');
let or = document.getElementById('or');
let i = 0;
function hisob(){
    img[i].style.display = 'none';
    i++;
    if( i >= img.length){
        i = 0;
    }
    img[i].style.display = 'block'

}
function hisob1(){
    img[i].style.display = 'none';
    i--;
    if( i < 0){
        i = img.length - 1;
    }
    img[i].style.display = 'block'

}
ol.onclick = hisob
or.onclick = hisob1

let barbtn = document.getElementById('barbtn');
let bar2 = document.getElementById('bar2');;
let bar = document.getElementById('bar');;


function hisob2(){
    bar.style.display = 'none'
    bar2.style.display = 'block'
}
barbtn.onclick = hisob2

14-dars
