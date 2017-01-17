var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea = 30;
var i = 0;
var xf, yi;

while (i < linea) 
{
    yi = 10 * i;
    xf = 10 * (i + 1);
    dibujarLinea("pink", 0, yi, xf, 300); 
    console.log("test" + i);
    i = i + 1;
}

dibujarLinea("#AFA", 1, 1, 1, 299);
dibujarLinea("#AFA", 1, 299, 299, 299);

function dibujarLinea(color, xinicial, yincial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyke = color;
    lienzo.moveTo(xinicial, yincial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();


}