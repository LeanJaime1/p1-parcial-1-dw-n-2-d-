'use strict';


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
    
    
    
//pedimos los datos de las pistas y validamos
do {

    let nombrePista;

    do{
        nombrePista = prompt('Ingrese el nombre de la pista');
    }   while(nombrePista.length == 0);
    
    
  
    let duracionPista;

    do {
        duracionPista = prompt('Ingrese la duración de la  pista en un rango de 0 a 7200 segundos')
    } while (isNaN(duracionPista) || duracionPista <= 0 || duracionPista >= 7200 );
  
  
       let pista = new Pista (nombrePista, duracionPista);
  
       //guardar las variables
       pistas.push(pista);
  
  } while (confirm('queres agregar mas pistas?'))

 console.log(pistas);



alert(`Usted a cargado ${discos.length} discos, puede cargar más si lo desea`);


}

       




// Función Mostrar:
const Mostrar = () => {
    
    let html = '';
    
    
    
    discos.forEach(disco => {

       
         html += ` 
        <h3>Discos</h3>
        <p>Nombre del disco: ${disco.nombreDisco}</p>
        <p>Autor del disco: ${disco.autorDisco}</p>
        <p>Código del disco: ${disco.codigoDisco}</p>
        <h4>Pistas del disco</h4>
        <ul>
            <li>Nombre de la pista: ${disco.nombrePista} </li>
            <li>Duración de la pista: <strong style="color: ${disco.duracionPista > 180 ? 'red' : 'black'}" > ${disco.duracionPista}</strong> segundos </li>
        </ul>
        
        
        
        
        `;
        

    })
    
    
    document.getElementById('info').innerHTML = html; 
    
    
    
    //vacio los arrays para  cargar nuevos datos
     discos = [];
     pistas = [];    
    
};
