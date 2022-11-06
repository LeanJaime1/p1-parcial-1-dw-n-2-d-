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

    
    
    
    
    
}
