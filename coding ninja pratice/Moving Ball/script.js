var ball=document.querySelector('.container')
var W='w';
var A='a';
var S='s';
var D='d';
var i=1;
var j=1;
document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case W:
        if (i>0 && i<=75) {
            console.log("w=i="+i)
            ball.style.top=--i+"%"
        }
        break;
      case A:
        if (j>0 && j<=75) {
            ball.style.left=--j+"%"
        }
       
        break;
      case S:
        if (i>=0 && i<75) {
            ball.style.top=++i+"%"
        }
        break;
      case D:
        if (j>=0 && j<75) {
            ball.style.left=++j+"%"
        }
        break;
    }
  });