(function(){
	var express=require('express');
	var morgan=require('morgan');
	var bodyparser=require('body-parser');
	var app=express();
	var puerto=3000;
	var mysql=require('mysql')
	var conf=require('./config');
	var pool=mysql.createpool(conf.database);
	app.set('pool',pool)
	app.use(morgan('dev'));
	app.use(bodyparser.urlencoded({
		extended:false
	}));
	app.use(bodyparser.json());
	app.use('/api/v1',require('./rutas')(app));

	app.listen(puerto,function(){
		console.log("Servidor iniciado en el puerto: "+puerto);
	});
}) ();

