const models = require('../database/models');

const crearRegistration = async function (req, res){
    const {cedulaEs, materiaID, estado} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();
    try{
        let newMateria = await models.Matriculas.create({
            cedulaEs,
            materiaID,
            estado,
            fechaC,
            fechaU
        },{
            fields: ['cedulaEs', 'materiaID', 'estado', 'fechaC', 'fechaU']
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


const consultarRegistrations = async function (req, res){
    try{
        const allRegistrations = await models.Matriculas.findAll();
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
        const matriculas = await models.Matriculas.findAll({
            attributes:['materiID', 'estado', 'profesorID', 'fechaC', 'fechaU'],
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
        const {materiaID} = req.body;
        const matriculas = await models.Matriculas.findAll({
            attributes:['cedulaEs', 'estado', 'profesorID', 'fechaC', 'fechaU'],
            where:{
                materiaID
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
    const {estado} = req.body;
    var fechaU = new Date();
    try {

        const updateMatricula = await models.Matriculas.update({
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

const asignarProfesor = async function (req, res) {
    const {materiaID} = req.params;
    const {profesorID} = req.body;
    try {

        const updateMatricula = await models.Matriculas.update({
            profesorID
        },{
            where: { materiaID: materiaID}
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
    updateRegistration,
    asignarProfesor
}

