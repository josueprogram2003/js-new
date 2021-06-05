$(document).ready(function () {
$('#boton').click(function () { 
    agregar();
    });

});

var t = $('#titulo');
var d = $('#desc');
var item = 0;

function agregar(){
    item++;
    var fila = '<tr><td>'+item+'</td><td>'+t.val()+'</td><td>'+d.val()+'</td><td>'+'s'+'</td></tr>';
    $('#tbd').append(fila);
};


function editar() {
    
}

function eliminar() {
    
}

function limpiar() {
    
}
