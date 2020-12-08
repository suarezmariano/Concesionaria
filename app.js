const  autos = require ('./autos.js');

const concesionaria = {
    autos: autos,

    buscarAuto : function ( patente)  {
        const coche = autos.find ( (a) => a.patente == patente );
         return coche ? coche : null;
    },

    venderAuto : function (patente) {   
        const coche = this.buscarAuto(patente);
        if (coche ){
           coche.vendido = true;
          const index = autos.findIndex ((a) => a.patente == patente);
          autos[index] = coche;
        };
    }



}

const persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
 };