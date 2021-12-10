var textbox2 = document.getElementsByClassName('textbox2');
var textbox3 = document.getElementsByClassName('textbox3');

$(function (){
    var left = $("#textbox2").css("left");
});

console.log(textbox2.style.left);

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    textbox2.style.top = `${pos}px`
}