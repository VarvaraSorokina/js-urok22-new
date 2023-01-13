'use strict';
// Задача 1
function buttonClick() {
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

// Задача 2
function buttonClick2() {
    let elem2 = document.getElementById('elem2');
    elem2.outerHTML = '<h3><b>Абзац превратился в h3!</b></h3>';
}

// Задча 3
function buttonClick3(){
let elem3 = document.getElementById('elem3');
    elem3.innerHTML = '<b>При нажатии на кнопку абзац станет h3, но текст останется.</b>';
}

//Задача 5
function buttonClick5(){
        let elems = document.getElementsByTagName('p');
        for(let i = 0; i<elems.length; i++){
            elems[i].innerHTML = i+0;
       }
}
