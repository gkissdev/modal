'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
const classToChange = 'hidden';

const showModalBtnClicked = function () {
    console.log(`btn clicked`);
    if (modal.classList.contains(classToChange)) {
        modal.classList.remove(classToChange)
        overlay.classList.remove(classToChange)
    }

}
const closeModal = function (){
    if (!modal.classList.contains(classToChange)) {
        modal.classList.add(classToChange)
        overlay.classList.add(classToChange)
    }
}
const escKeyDown = function (event){
    if(event.key === `Escape`){
        closeModal()
    }
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', showModalBtnClicked)
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (event){
    escKeyDown(event);
})