'use strict';
const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnCloseModal = document.querySelector ('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// for open
const openModel = function(){
    modal.classList.remove('hidden')
     overlay.classList.remove('hidden')
}

// for close 

const closeModel = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden');

}

// all model using for loop 
for(let i=0;i<btnOpenModal.length ; i++)
    btnOpenModal[i].addEventListener('click',openModel)

// close model 
btnCloseModal.addEventListener('click',closeModel)


// if user click any where it will be close
overlay.addEventListener('click',closeModel);


// keyword events
document.addEventListener('keydown',function(e){
    // user click escape btn then close the model
    if(e.key=== 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModel();
        }

        // user click enter btn then open the model
    }else if(e.key === 'Enter'){
        if(modal.classList.contains('hidden')){
            openModel();
        }

    }

})