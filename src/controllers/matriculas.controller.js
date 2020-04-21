const models = require('../database/models');

const crearRegistration = async function (req, res){

    const {cedulaEs, materiaID, grupo, estado} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();

    try{
        const asignacion = await models.Asignacion.findOne({
            where:{
                materiaID,
                grupo
            }
        });
        if(asignacion != null){
            try{
                let newMateria = await models.Matricula.create({
                    cedulaEs,
                    materiaID,
                    grupo,
                    estado,
                    fechaC,
                    fechaU
                },{
                    fields: ['cedulaEs', 'materiaID', 'grupo', 'estado', 'fechaC', 'fechaU']
                });
                if(newMateria){
                    return res.json({
                        message: 'matriculado satisfactoriamente'
                    });
                }
            }catch(e){
                console.log(e);
                res.json({
                    message: 'Hubo un error'
                })
            }
        }
    }
    catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }    
}


const consultarRegistrations = async function (req, res){
    try{
        const allRegistrations = await models.Matricula.findAll();
            res.json({
                data: allRegistrations
            });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const registrations = async function (req, res){
    try{
        const {cedulaEs} = req.body;
        const matriculas = await models.Matricula.findAll({
            attributes:['materiaID', 'grupo', 'estado', 'fechaC', 'fechaU'],
            where:{
                cedulaEs
            }
        })
        res.json({
            data: matriculas
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const regClass = async function (req, res){
    try{
        const {materiaID, grupo} = req.body;
        const matriculas = await models.Matricula.findAll({
            attributes:['cedulaEs', 'estado', 'fechaC', 'fechaU'],
            where:{
                materiaID,
                grupo
            }
        })
        res.json({
            data: matriculas
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const regClassEs = async function (req, res){
    try{
        const {materiaID} = req.body;
        const matriculas = await models.Matricula.findAll({
            attributes:['cedulaEs', 'grupo', 'estado', 'fechaC', 'fechaU'],
            where:{
                materiaID,
            }
        })
        res.json({
            data: matriculas
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const updateRegistration = async function (req, res) {
    const {cedulaEs} = req.params;
    const {grupo, estado} = req.body;
    var fechaU = new Date();
    try {

        const updateMatricula = await models.Matricula.update({
            grupo,
            estado,
            fechaU
        },{
            where: { cedulaEs: cedulaEs }
        });
        
        if(updateMatricula){
            res.json(
                {   
                    data: updateMatricula,
                    message: 'Matricula actualizada'
                })
        }
    }
    catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }
}




module.exports ={
    crearRegistration,
    consultarRegistrations,
    registrations,
    regClass,
    regClassEs,
    updateRegistration,
}

