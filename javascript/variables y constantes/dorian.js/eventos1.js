const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');
/* 
    button.addEventListener('click',()=>{
     console.log("CLICK");
 });
 
 */

 //Cuando se hace doble click

    button.addEventListener('dblclick',() =>{
        console.log('Doble click');
    });

    //FORMA INCORRECTA 

//Cuando ingresar con el cursos a un elemento
    // box.addEventListener('mouseenter',() =>{
    //     box.style.background = 'green';
    // });

//Cuando sale el cursor del elemento

    // box.addEventListener('mouseleave', () =>{
    //     box.style.background = 'red';
    // });


    //FORMA CORRECTA

    // box.addEventListener('mouseenter',() =>{
    //         box.classList.replace('red','green');
    // });

    // box.addEventListener('mouseleave',()=>{
    //     box.classList.replace('green','red');
    // });

    // Cuando  haz pulsado o estas pulsando el raton
    box.addEventListener('mousedown', ()=>{
        console.log('has pulsado el raton');
    });

    //Cuandp haz soltado el raton
    box.addEventListener('mouseup', ()=>{
        console.log('has soltado el boton izquierdo del raton');
    });

    //Cuando mueves el raton por la caja
    box.addEventListener('mousemove', ()=>{
        console.log('Estas moviendo el raton en la caja');
    });


    //Cuando pulsas una tecla
    input.addEventListener('keydown', () =>{
        console.log('Has pulsado una tecla');
    });

    //Cuando sueltas la tecla
    input.addEventListener('keyup', () =>{
        console.log('Has soltado una tecla');
    });


    //Cuando matienes presionado la tecla
    input.addEventListener('keypress', () =>{
        console.log('Estas pulsando una tecla');
    });