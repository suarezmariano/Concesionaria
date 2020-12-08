const  autos = require ('./autos.js');

const concesionaria = {
    autos: autos,

    buscarAuto : function ( patente)  {
        const coche = autos.find ( (a) => a.patente == patente );
         return coche ? coche : null;
      }




}

const persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
 };