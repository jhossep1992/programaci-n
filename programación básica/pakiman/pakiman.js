class Pakiman 
{
	constructor(n,v,a,t)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
		this.tipo = t;

		this.imagen.src = imagenes[this.nombre];
	}

	hablar()
	{
		alert("Hola mi nombre es " + this.nombre);
	}

	mostrar()
	{
		document.write("<p>")
		document.body.appendChild(this.imagen);
		document.write("<strong>" + this.nombre + "</strong>" + "<br />");
		document.write("<strong>" + this.vida + "</strong>" + "<br />");
		document.write("<strong>" + this.ataque + "</strong>" + "<br />");
		document.write("<strong>" + this.tipo + "</strong>" + "<br />");
		document.write("<p>")
	}

} 
