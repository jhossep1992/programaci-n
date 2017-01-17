var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
	if (evento.keyCode == teclas.UP)
    {

        console.log("todos para arriba");
    }

    switch(evento.keyCode) {
        case teclas.UP:
            console.log("vamos para arriba");
            break;
        case teclas.DOWN:
            console.log("vamos para abajo");
            break;
        case teclas.LEFT:
            console.log("Vamos para la izquierda");
            break;
        case teclas.RIGHT:
            console.log("Vamos para la derecha");
    }

}