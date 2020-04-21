const models = require('../database/models');

const crearAsignacion = async function (req, res){
    const {materiaID, profesorID, grupo} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();
    try{
        let newAsignacion = await models.Asignacion.create({
            materiaID,
            profesorID,
            grupo,
            fechaC,
            fechaU
        },{
            fields: ['materiaID', 'profesorID', 'grupo', 'fechaC', 'fechaU']
        });
        if(newAsignacion){
            return res.json({
                message: 'Adicionado satisfactoriamente'
            });
        }
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}


const consultarAsignations = async function (req, res){
    try{
        const allAsignaciones = await models.Asignacion.findAll();
            res.json({
                data: allAsignaciones
            });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const Asignations = async function (req, res){
    try{
        const {materiaID} = req.body;
        const asignacion = await models.Asignacion.findAll({
            attributes:['materiaID', 'profesorID', 'grupo', 'fechaC', 'fechaU'],
            where:{
                materiaID
            }
        })
        res.json({
            data: asignacion
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const checkAsignation = async function (req, res){
    try{
        const {materiaID, grupo} = req.body;
        const asignacion = await models.Asignacion.findAll({
            attributes:['materiaID', 'profesorID', 'grupo', 'fechaC', 'fechaU'],
            where:{
                materiaID,
                grupo
            }
        })
        res.json({
            data: asignacion
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}


const updateAsignations = async function (req, res) {
    const {materiaID} = req.params;
    const {profesorID, grupo} = req.body;
    var fechaU = new Date();
    try {

        const updateAsignations = await models.Asignacion.update({
            profesorID,
            fechaU
        },{
            where: { materiaID: materiaID }
        });
        
        if(updateAsignations){
            res.json(
                {   
                    data: updateAsignations,
                    message: 'ASignacion actualizada'
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
    crearAsignacion,
    consultarAsignations,
    Asignations,
    checkAsignation,
    updateAsignations,
}
