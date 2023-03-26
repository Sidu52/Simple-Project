var button=document.getElementById('but');
var input=document.getElementById('number');
var i=1;
var current=document.querySelector('.ineer-display1');
var next= document.querySelector('.ineer-display2');
function startCounter() {
    current.innerText=0;
    next.innerText=1;
    i=1;
    if (input.value>9) {
        alert("Value Greaterthan 9")
    }
    else{
        var interval =setInterval(function () {
            if (i>input.value) {
                clearInterval(interval);
            }
            else{
                animate()
            }
        },1000);
    }
    }
    
button.addEventListener('click',startCounter);
function animate() {
    next.classList.add('animate');
    next.innerText=i++;
    setTimeout(function () {
        next.classList.remove('animate');
        current.innerText=next.innerText;
    },500);
}