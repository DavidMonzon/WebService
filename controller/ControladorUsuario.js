module.exports=function(app){
	return {
		registro:function(req,res){
			var pool=app.get('pool');
			pool.getConnection(function(err, connection){
				if(err){
					connection.release();
					respuesta.json({"code":100, "status": "Error al conectar a la base de datos"});
				}
				connection.query("	CALL sp_registroUsuario ('"+req.body.nombre+"','"+req.body.apellido+"','"+req.body.telefono+"','"+req.body.correo+"','"+req.body.direccion+"','"+req.body.nick+"','"+req.body.contraseña+"');",function(err,rows){
					if(err)
						throw err;
					else 
						res.json({"Mensaje":"Objeto agregado correctamente"});
					connection.release();		
				});
			});			
		},
		
		login:function(req,res){
			pool.getConnection(function(err, connection){
				if(err){
					connection.release();
					respuesta.json({"code":100, "status": "Error al conectar a la base de datos"});
				}
				connection.query("	CALL sp_autenticarUsuario ('"+req.body.nick+"','"+req.body.contraseña+"');",function(err,rows){
					if(err)
						throw err;
					else 
						res.json(row);
					connection.release();
				});
			});	
			
		}
	}
}