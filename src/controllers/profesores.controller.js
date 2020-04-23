const models = require('../database/models');

const crearTeacher = async function (req, res){
    const {cedula, escuela, nombre, apellido, titulo, correo, celular, sexo} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();
    try{
        let newTeacher = await models.Profesor.create({
            cedula,
            escuela,
            nombre,
            apellido,
            titulo,
            correo,
            celular,
            sexo,
            fechaC,
            fechaU
        },{
            fields: ['cedula', 'escuela', 'nombre', 'apellido', 'titulo', 'correo', 'celular', 'sexo', 'fechaC', 'fechaU']
        });
        if(newTeacher){
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

const consultarTeachers = async function (req, res){
    try{
        const allTeachers = await models.Profesor.findAll();
            res.json({
                data: allTeachers
            });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const Teacher = async function (req, res){
    try{
        const {cedula} = req.body;
        const teacher = await models.Teacher.findOne({
            where:{
                cedula
            }
        })
        res.json({
            data: teacher
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const Login = async function (req, res){
    
    const {correo, cedula} = req.body;
    try{
        const usuario = await models.Profesor.findOne({
            attributes:['cedula', 'nombre'],
            where:{
                correo,
                cedula
            }
        });
        res.json({
            data: usuario
        });
    }catch(e){
        console.log(e);
        res.json({
            message: "error",
            data: {}
        });
    }
}

const updateTeacher = async function (req, res) {
    const {cedula} = req.params;
    const {escuela, nombre, apellido, titulo, correo, celular, sexo} = req.body;
    var fechaU = new Date();
    try {

        const updateUsuario = await models.Profesor.update({
            escuela,
            nombre,
            apellido,
            titulo,
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
                    message: 'Profesor actualizado'
                })
        }
    }
    catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }
}

const deleteTeacher = async function (req, res) {
    const { cedula } = req.body;
    try {
        const deleteRowCount = await models.Profesor.destroy({
            where: { cedula: cedula }
        });
        res.json({
            message : 'Profesor eliminado',
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
    crearTeacher,
    consultarTeachers,
    Teacher,
    Login,
    updateTeacher,
    deleteTeacher
}
