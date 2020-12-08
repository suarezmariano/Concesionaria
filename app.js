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
    },

    autosParaLaVenta : function (){
        const lista = autos.filter(function(auto){
            return auto.vendido == false;
            });  
        return lista;
    },
  
    autos0KM : function (){
        const lista = this.autosParaLaVenta();
        const disponible = lista.filter(function(a){ 
            return a.kms < 100; });
        return disponible;
    },

    listaDeVentas : function (){
        const lista = autos.filter(function(auto){
            return auto.vendido == true; });  
        const listaVenta = lista.map(function(a){
            return a.precio; });
        return listaVenta;
    },
      
    totalDeVentas : function (){
        const ventas = this.listaDeVentas();
        const reducer = (acum, num) => acum + num;
        const total = ventas.reduce(reducer,0);
        return total;
    },
         
    puedeComprar : function (auto, persona){
        const cuota = auto.precio / auto.cuotas;
        return (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas  >= cuota);
    },
        
        
    autosQuePuedeComprar : function (persona){
        const lista = this.autosParaLaVenta();
        const ok = lista.filter(function(auto){
            return (persona.capacidadDePagoTotal >= auto.precio && persona.capacidadDePagoEnCuotas >= auto.precio/auto.cuotas);
            });
        return ok;
    }
      

};

const persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
 };
 