module.exports=function(app){
	return {
		registro:function(req,res){
		connection.query("	CALL sp_registroUsuario ('"+req.body.nombre+"','"+req.body.apellido+"','"+req.body.telefono+"','"+req.body.correo+"','"+req.body.direccion+"','"+req.body.nick+"','"+req.body.contraseña+"');",function(err,rows){
			if(err)
				throw err;
			else 
				res.json({"Mensaje":"Objeto agregado correctamente"});
		});
		},
		login:function(req,res){
			connection.query("	CALL sp_autenticarUsuario ('"+req.body.nick+"','"+req.body.contraseña+"');",function(err,rows){
				if(err)
					throw err;
				else 
					res.json(row);
			});
		}
	}
}
