let button = document.getElementById('button');
let p = document.getElementById('pp');


function myJS(a,b){
    let amal = document.getElementById('amal').value
    switch(amal){
        case "+":
            return a + b;
             case "-":
             return a - b;
             case "*":
             return a * b;
             case "/":
             return a / b;
             case "**":
             return a ** b;
        }
        
    }
    
    function hisob (){
        let y = +document.getElementById('son2').value
        let x = +document.getElementById('son1').value
    p.innerHTML = myJS(x,y);
}
button.onclick = hisob