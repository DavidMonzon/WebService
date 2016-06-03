var ruta=require('express').Router();

module.exports=(function(app){
	var usuario=require('../controller/ControladorUsuario,js')(app);
	ruta.get('/',function(peticion,respuesta){
		respuesta.send("Servidor Iniciado");
	});

	ruta.post('/usuario/registro/',usuario.registo);
	ruta.post('/usuario/login/',usuario.login);
	return ruta;
});
