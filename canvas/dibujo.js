var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d")
var lineas = 30
var l = 0
var xi, yi, xf, yf
var colors = "#FAA"

for( l = 0; l <  lineas; l++){
    xi = l * 10
    xf = 300 - xi
    yi = l * 10
    yf = 300 - yi
    dibujarlineas(colors, xi, 0, 300, yi)
    dibujarlineas(colors, 300, yi, xf, 300)
    dibujarlineas(colors, xf, 300, 0, yf)
    dibujarlineas(colors, 0, yf, xi, 0)  
}

dibujarlineas(  colors,1,1,1,299)
dibujarlineas(  colors,1,299,299,299)




function dibujarlineas(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath()
    lienzo.strokeStyle = color
    lienzo.moveTo(xinicial, yinicial)
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke()
    lienzo.closePath()
}