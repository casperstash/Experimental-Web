const textBox = document.getElementById('textbox2');
const textbox3 = document.getElementById('textbox3');


console.log(textBox.style.left);

$(function () {
    var left2 = $(".textbox2").css("left");
    window.onscroll = () =>{
        let pos = window.scrollY - 1000;
        left2 = `${pos}px`;
        console.log(left2);
    }
});


// window.onscroll = () =>{
//     let pos = window.scrollY - 800;
//     console.log(pos);
// }