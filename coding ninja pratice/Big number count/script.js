var button = document.getElementById('but');
var input = document.getElementById('number');
var once = document.querySelector('.once1');
var nextonce = document.querySelector('.once2');
var tens = document.querySelector('.tens1');
var nexttens = document.querySelector('.tens2');
var hund = document.querySelector('.hund1');
var nexthund = document.querySelector('.hund2');
var thus = document.querySelector('.thus1');
var nextthus = document.querySelector('.thus2');
var tenthus = document.querySelector('.tenthus1');
var nexttenthus = document.querySelector('.tenthus2');
var i=1;
button.addEventListener('click', startCounter);
function startCounter() {
    once.innerText = 0;
    nextonce.innerText = 0;
    tens.innerText = 0;
    nexttens.innerText = 0;
    hund.innerText = 0;
    nexthund.innerText = 0;
    thus.innerText = 0;
    nextthus.innerText = 0;
    tenthus.innerText = 0;
    nexttenthus.innerText = 0;
    var count=0;
    var interval =setInterval(function () {
        animate()
        count++;
        if (count==input.value) {
            clearInterval(interval);
        } 
    },1000)
}

function animate() {
    increse(once,nextonce);
    if (nextonce.innerText==10) {
        nextonce.innerText=0;
        increse(tens,nexttens);
    }   
    if(nexttens.innerText==10){
        nexttens.innerText=0;
        increse(hund,nexthund); 
    }
    if(nexthund.innerText==10){
        nexthund.innerText=0;
        increse(thus,nextthus); 
    }
    if (nexttens.innerText==10){
        nextthus.innerText=0;
        increse(tenthus,nexttenthus); 
    }
}
function increse(event1,event2) {
    event2.classList.add('animate');
    event2.innerText++; 
    setTimeout(function(){
        event2.classList.remove('animate');
        event1.innerText = event2.innerText;      
    },500);
}