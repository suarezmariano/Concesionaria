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
    };

    autosParaLaVenta : function (){
        const lista = autos.filter(function(auto){
        return auto.vendido == false;
       }) ;  
        return lista;
       },
  
     autos0KM : function (){
        const lista = this.autosParaLaVenta();
        const disponible = lista.filter(function(a){ 
        return a.kms < 100; });
            return disponible;
        }



}

const persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
 };