var ruta=require('express').Router();

ruta.get('/',function(peticion,respuesta){
	respuesta.send("Servidor Iniciado");
});
module.exports=ruta;