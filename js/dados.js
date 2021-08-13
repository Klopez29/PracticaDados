var nombres= [] , puntaje = [];

function lanzardados() {
    //definimos variables con un numero al azar del 1 al 6
    let dado1 =  getNumRand(1, 6);
    let dado2 =  getNumRand(1, 6);
    let dado3 = getNumRand(1,6);
    let suma = dado1 + dado2 + dado3;
    var nombre;
    //almacenamos nombre
    nombre= prompt("Ingrese su nombre");
    nombres.push(nombre); 
    // con el numero dado hacemos el llamado de la imagen que toco
    document.getElementById("ImgDado1").src="img/dice"+dado1+".png";
    document.getElementById("ImgDado2").src="img/dice"+dado2+".png"; 
    document.getElementById("ImgDado3").src="img/dice"+dado3+".png";    
    document.getElementById("SumaDados").innerHTML = suma;
    // ahora guardamos la suma en un arreglo
    puntaje.push(suma);


}
//funcion para mostrar los jugadores que recien juegan
function mostrar(){
        var cuerpotabla= document.getElementById('puntos');
       var tablallena= "";
       for(i=0;i<nombres.length;i++){
           tablallena+="<tr>";
           tablallena+="<td>"+ nombres[i]+ "</td>";
           tablallena+="<td>"+ puntaje[i]+ "</td>";
           tablallena+="</tr>";

       } 
       cuerpotabla.innerHTML= tablallena;
}
// funcion que me permite generar un numero aleatorio
function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}
