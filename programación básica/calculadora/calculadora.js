function sumar ()
{
	var pNumero = document.getElementById("txt_uno").value;
	var sNumero = document.getElementById("txt_dos").value;
	sNumero = parseInt(sNumero);
	pNumero = parseInt(pNumero);
	var resultado = pNumero + sNumero;
	alert("la suma es: " + resultado);
}

