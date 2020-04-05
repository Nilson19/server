const models = require('../database/models');

const crearClass = async function (req, res){
    const {codigo, escuela, nombre, creditos} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();
    try{
        let newMateria = await models.Materia.create({
            codigo,
            escuela,
            nombre,
            creditos,
            fechaC,
            fechaU
        },{
            fields: ['codigo', 'escuela', 'nombre', 'creditos', 'fechaC', 'fechaU']
        });
        if(newMateria){
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

const consultarClass = async function (req, res){
    try{
        const allClass = await models.Materia.findAll();
            res.json({
                data: allClass
            });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const Class = async function (req, res){
    try{
        const {codigo} = req.body;
        const materia = await models.Materia.findOne({
            where:{
                codigo
            }
        })
        res.json({
            data: materia
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}


const updateClass = async function (req, res) {
    const {codigo} = req.params;
    const {escula, nombre, creditos} = req.body;
    var fechaU = new Date();
    try {

        const updateMateria = await models.Materia.update({
            escuela,
            nombre,
            creditos,
            fechaU
        },{
            where: { codigo: codigo }
        });
        
        if(updateMateria){
            res.json(
                {   
                    data: updateMateria,
                    message: 'Materia actualizada'
                })
        }
    }
    catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }
}

const deleteClass = async function (req, res) {
    const { codigo } = req.body;
    try {
        const deleteRowCount = await models.Materia.destroy({
            where: { codigo: codigo }
        });
        res.json({
            message : 'Materia eliminada',
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
    crearClass,
    consultarClass,
    Class,
    updateClass,
    deleteClass

}

