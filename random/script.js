let pp = document.getElementById('pp');
let btn = document.getElementById('btn');


function ran(){
  let num1 = parseInt(document.getElementById('num1').value)
  let num2 = parseInt(document.getElementById('num2').value)
  pp.innerHTML = ( Math.floor(    Math.random() *( num2 - num1 + 1) ) + num1); 
}
btn.onclick = ran
