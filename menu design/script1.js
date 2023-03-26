// DARK MODE
let body =document.querySelector('body');
let dark =document.querySelector('#dark');

dark.onclick=function(){
    if (dark.checked==true) {
        body.classList.add('darkMode')
        body.style.background="#222";
    }
    else{
        body.classList.remove('darkMode')
        body.style.background='rgb(228, 228, 226)';
    }
}
// BACKGROUND COLOR
function changecolor() {
    var color1 = document.getElementById('Bg-color').value;
    var body=document.getElementsByTagName('body')[0];
    
    if(color1=='Reset' && dark.checked==false){
        body.style.background='rgb(228, 228, 226)';
    }
    else if(color1=='Reset'&&dark.checked==true){
        body.style.background="#222";
    }
    else{
        body.style.background=color1;
    }   
}
// TEXT COLOR
function textcolor() {
    var textcolor=document.getElementById('text-color').value;
    if (textcolor=='Reset') {
        document.getElementById("heading").style.color='#333';
        const menutest=document.querySelectorAll(".menucolor");
        for (let i = 0; i < menutest.length; i++) {
            menutest[i].style.color="#aaa";
        }
    }
    document.getElementById("heading").style.color=textcolor;
    const menutest=document.querySelectorAll(".menucolor");
    for (let i = 0; i < menutest.length; i++) {
        menutest[i].style.color="light"+textcolor;
    }
}

// FONTSIZE
function textsize(){
    var textsize= document.getElementById('text-size').value;
    if(textsize<0){
        document.getElementById("heading").style.fontSize = '20px';
        document.querySelector(".menucolor").style.fontSize ='13px';
        document.getElementById("heading").style.lineHeight='20px';
    }
    else{
        document.getElementById("heading").style.fontSize=textsize+'px';
        document.querySelector(".menucolor").style.fontSize=textsize-5+'px';
        document.getElementById("heading").style.lineHeight=textsize+'px';
        
    } 
}
// CRROSER
function crrosbutton() {
    var x = document.getElementById("hide-box");
	var l = document.getElementById("l1");
	var m = document.getElementById("m1"); 
    if (x.style.display == "none") {
        l.style.transform="rotate(50deg)";
	    m.style.transform="rotate(-45deg)";
        x.style.display = "block";
    } else {
        l.style.transform="rotate(38deg)";
        m.style.transform="rotate(142deg)";
        x.style.display = "none";
    }
  }

  