const models = require('../database/models');

const crearStudent = async function (req, res){
    const {cedula, nombre, apellido, correo, celular, sexo} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();
    try{
        let newEstudiante = await models.Estudiante.create({
            cedula,
            nombre,
            apellido,
            correo,
            celular,
            sexo,
            fechaC,
            fechaU
        },{
            fields: ['cedula', 'nombre', 'apellido', 'correo', 'celular', 'sexo', 'fechaC', 'fechaU']
        });
        if(newEstudiante){
            return res.json({
                message: 'creado satisfactoriamente'
            });
        }
    }catch(e){
        console.log(e);
        res.json({
            message: 'hubo un error'
        })
    }
}

const consultUsuarios = async function (req, res){
    try{
        const allusers = await estudiante.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

const oneUsuari = async function o(req, res){
    try{
        const {id_usuario} = request.params;
        const usuario = await usuarios.findOne({
            where:{
                id_usuario
            }
        })
        res.json({
            data: usuario
        })
    }catch(e){
        console.log(e);
    }
}

const consultarLogin = async function (req, res){
    
    const {id_usuario, pass} = req.body;
    try{
        const tipoUsuario = await usuarios.findOne({
            attributes: ['tipo'],
            where:{
                id_usuario,
                pass
            }
        });
        if(tipoUsuario){
            return res.send(tipoUsuario);
        }else
             return res.json(null);
    }catch(e){
        console.log(e);
        res.json({
            message: "error",
            data: {}
        });
    }
}



module.exports ={
    crearStudent,
    consultUsuarios
}

