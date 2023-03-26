var button=document.getElementById("ball");
var body=document.getElementById("b");
var stats=true;
button.addEventListener('click', function () {
   
    if (stats==true) {
        body.style.backgroundColor="black";
        button.style.backgroundColor="white";
        body.style.color="white";
        button.style.marginLeft="50px";
        stats=false;
    }
    else{
        body.style.backgroundColor="white";
        button.style.backgroundColor="black";
        body.style.color="black";
        button.style.marginLeft="0";
        stats=true;
    }

    
   
})