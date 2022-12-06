const button = document.querySelector(".click")
const input = document.querySelector(".input")
const paint = document.querySelector(".colorfull")

button.onclick=()=>{
    var symbols,color;
    color="#";
    symbols="0123456789ABCDEF";
    for( var i=0; i<6 ; i++ ){
    color = color+ symbols[Math.floor(Math.random() * 16)];
    }
    input.value=color;
    paint.style.backgroundColor = color;
}
