/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

//creamos las clases

class Disco {
    constructor(nombreDisco, autorDisco, codigoDisco, ){
        this.nombreDisco = nombreDisco;
        this.autorDisco = autorDisco;
        this.codigoDisco = codigoDisco;

    }
}

class Pista{
    constructor(nombrePista, duracionPista){
        this.nombrePista = nombrePista;
        this.duracionPista = duracionPista
    }
}

// arrays:
let discos = [];
let pistas = [];


// Función Cargar:
const Cargar = () => {
    
    //pedimos los datos del disco y validamos 
    
    
    
    
//variable nombre del disco
let nombreDisco;

do{
    nombreDisco = prompt('Ingrese el nombre del disco');
}   while(nombreDisco.length == 0);

       
//variable autor del disco
let autorDisco;

do{
    autorDisco = prompt('Ingrese el autor del disco');
}   while(autorDisco.length == 0 || !isNaN(autorDisco));
    
    
//variable codigo del disco
let codigoDisco;
   
do{
    codigoDisco = prompt('Ingrese el código del disco en un rango numérico entre 1 y 999');
}   while( isNaN(codigoDisco) || codigoDisco <= 1 || codigoDisco >= 999 );

    
    

//guardamos las variables en  el objeto
let disco = new Disco (nombreDisco, autorDisco, codigoDisco);
    
    
//guardamos el objeto en el array
discos.push(disco);

console.log(discos);
    
}
