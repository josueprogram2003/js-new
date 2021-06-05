const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday' , 'sunday'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('seleccion');


// CREANDO ELEMENTOS HTML DESDE JAVASCRIP

// const itemlist = document.createElement('li');
// itemlist.textContent = 'LUNES';

// daysList.appendChild(itemlist);

title.innerHTML = 'Dom - <span>Crear e insertar Elementos</span>'

// console.dir(itemlist)

const fragment = document.createDocumentFragment();
// Con esto se logra una sola inyeccion en todo el html
// for (const day of days) {
//     const li = document.createElement('li');
//     li.textContent=day;
//     fragment.appendChild(li);
// }

// daysList.appendChild(fragment);

for (const day of days) {
    const opcion = document.createElement('OPTION');
    opcion.setAttribute('value', day.toLowerCase());
    opcion.textContent=day;
    fragment.appendChild(opcion);
}

selectDays.appendChild(fragment)
