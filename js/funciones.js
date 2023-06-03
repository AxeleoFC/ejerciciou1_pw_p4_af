var cant=1;

function respuetsa(opc) {
    if(opc=="excadrill"){
        document.getElementById('intentoid').innerHTML="Intentos: "+cant;
        document.getElementById('seleccionid').className="resultado";
        document.getElementById('seleccionid').innerHTML="Felicitaciones, has seleccionado la opción correcta";
        document.getElementById('pokemonid').src="../img/pcolor.jpg";
        intentos(cant);
        cant=1;
    }else{
        cant=cant+1;
        document.getElementById('intentoid').innerHTML="Intentos: "+cant;
        document.getElementById('seleccionid').innerHTML="Pokémon incorrecto, intentalo nuevamente";
    }
    if(cant==4){
        intentos(cant)
    }
}
function reiniciar() {
    cant=1;
    document.getElementById('seleccionid').innerHTML="Selecciona el nombre de Pokémon correcto";;
    document.getElementById('pokemonid').src="../img/pnegro.jpg";
    document.getElementById('puntajeid').innerHTML="Puntaje: 0";
    document.getElementById('intentoid').innerHTML="Intentos: "+cant;
}
function intentos(intento) {
    switch (intento) {
        case 1:
            document.getElementById('puntajeid').innerHTML="Puntaje: 5";
            break;
        case 2:
            document.getElementById('puntajeid').innerHTML="Puntaje: 3";
            break;
        case 3:
            document.getElementById('puntajeid').innerHTML="Puntaje: 1";
            break;
        default:
            reiniciar();
            break;
    }
}