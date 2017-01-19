var vp = document.getElementById("villapaltzi");
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVaca()
{
	vaca.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if(fondo.cargaOK == true)
	{
		papel.drawImage(fondo.imagen, 0,0);
	}

	if(vaca.cargaOK == true)
	{
		x = aleatorio(0, 420);
		y = aleatorio(0, 420);
		papel.drawImage(vaca.imagen, x,y);
	}
}

function aleatorio (min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}
