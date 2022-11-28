let parcialUno;
let parcialDos;
let final;
let promedio;

parcialUno = parseFloat(prompt("Pimer parcial"));
parcialDos = parseFloat(prompt("Segundo parcial"));
final = parseFloat(prompt("Final"));
promedio = (parcialUno+parcialDos+final)/3;

if (promedio >= 6) {
    document.write("El promedio es "+promedio+" APROBADO");
}else if (promedio >= 3.5){
    document.write("El promedio es "+promedio+" RECUPERATORIO");
}else{
    document.write("El promedio es "+promedio+" REPROBADO");
}