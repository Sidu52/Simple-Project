var button=document.querySelector('.button');
button.addEventListener('mouseover',function () {  
    button.style.top=(Math.random()*500+"px");
    button.style.left=(Math.random()*500+"px");
    
})