'use strict';

class Storage{

    constructor(){        
        // this.valueI();
        // this.removeI();
        // this.getI();
    }

    valueI(){
        buttons[0].addEventListener('click',()=>{
            localStorage.setItem('Example',input.value)
        });
    }

    removeI(){
        buttons[1].addEventListener('click', () => {            
            localStorage.removeItem('Example');
        });
    }

    getI(){
        buttons[2].addEventListener('click', () => {
        console.log(localStorage.getItem('Example'));
        });
    }
    
}

const input = document.querySelector('input');
const inputPlace = document.querySelector('input').placeholder ='Wprowadź tekst';
const buttons = document.querySelectorAll('button');

const data = new Storage(input, buttons);
data.valueI();
data.removeI();
data.getI();

