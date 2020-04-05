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
                message: 'Creado satisfactoriamente'
            });
        }
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const consultarStudents = async function (req, res){
    try{
        const allusers = await models.Estudiante.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

const Student = async function (req, res){
    try{
        const {cedula} = req.body;
        const estudiante = await models.Estudiante.findOne({
            where:{
                cedula
            }
        })
        res.json({
            data: estudiante
        })
    }catch(e){
        console.log(e);
    }
}

const Login = async function (req, res){
    
    const {correo, cedula} = req.body;
    try{
        const usuario = await usuarios.findOne({
            where:{
                correo,
                cedula
            }
        });
        if(usuario){
            return res.json(tipoUsuario);
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

const updateStudent = async function (req, res) {
    const {cedula} = req.params;
    const {nombre, apellido, correo, celular, sexo} = req.body;
    var fechaU = new Date();
    try {

        const updateUsuario = await models.Estudiante.update({
            nombre,
            apellido,
            correo,
            celular,
            sexo,
            fechaU
        },{
            where: { cedula: cedula }
        });
        
        if(updateUsuario){
            res.json(
                {   
                    data: updateUsuario,
                    message: 'Estudiante actualizado'
                })
        }
    }
    catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }
}

const deleteStudent = async function (req, res) {
    const { cedula } = req.body;
    try {
        const deleteRowCount = await Usuario.destroy({
            where: { cedula: cedula }
        });
        res.json({
            message : 'Estudiante eliminado',
            count: deleteRowCount
        })
        
    } catch (e) {
        console.log(e);
        res.status(502).json({
            message: "Algo salio mal",
            data: {}
        });
    }
}



module.exports ={
    crearStudent,
    consultarStudents,
    Student,
    Login,
    updateStudent,
    deleteStudent

}

