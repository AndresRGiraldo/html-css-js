var user = prompt("cual es tu peso?");
var planeta = parseInt( prompt("elige tu planeta\n1 es marte, 2 es jupiter"));
var peso = parseInt(user);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso_final;
if(planeta == 1 )
{
    peso_final = peso * g_marte / g_tierra
    peso_final = parseInt(peso_final)
    document.write( "tu peso en marete es <strong>" + peso_final + " kilos </strong>");
}
else if(planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra
    peso_final = parseInt(peso_final);
    document.write("tu peso en jupiter es <strong> " +  peso_final + " kilos </strong> ")
}
else
{
    peso_final = 1000000000;
    peso_final = parseInt(peso_final)
    document.write("tu peso en krypton es <strong>" + peso_final + " kilos </strong>")
}
peso_final = parseInt(peso_final)