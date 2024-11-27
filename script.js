// PREMIERE SECTION :
function rightClick (){
    const resp1 = document.getElementById('answer-1');
    resp1.classList.add('right-answer');
}
function wrongClick (){
    const resp1 = document.getElementById('answer-1');
    resp1.classList.add('wrong-answer');
}



// DEUXIEME SECTION :
/*Changer l'élément 3 en background-color: vert */
const section2 = document.getElementById('section-2');

const section2Liste = section2.firstElementChild;

const section2ListeLi = section2Liste.querySelectorAll('li');

section2ListeLi[2].classList.add('background-color-green');