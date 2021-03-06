const models = require('../database/models');

const crearEscuela = async function (req, res){
    const {codigo, nombre} = req.body;
    var fechaC = new Date();
    var fechaU = new Date();
    try{
        let newEscuela = await models.Escuela.create({
            codigo,
            nombre,
            fechaC,
            fechaU
        },{
            fields: ['codigo', 'nombre', 'fechaC', 'fechaU']
        });
        if(newEscuela){
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

const consultarEscuela = async function (req, res){
    try{
        const allEscuelas = await models.Escuela.findAll();
            res.json({
                data: allEscuelas
            });
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}

const Escuela = async function (req, res){
    try{
        const {codigo} = req.body;
        const escuela = await models.Escuela.findOne({
            where:{
                codigo
            }
        })
        res.json({
            data: escuela
        })
    }catch(e){
        console.log(e);
        res.json({
            message: 'Hubo un error'
        })
    }
}


const actualizarEscuela = async function (req, res) {
    const {codigo} = req.params;
    const {nombre} = req.body;
    var fechaU = new Date();
    try {

        const update = await models.Escuela.update({
            nombre,
            fechaU
        },{
            where: { codigo: codigo }
        });
        
        if(update){
            res.json(
                {   
                    data: update,
                    message: 'Escuela actualizada'
                })
        }
    }
    catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }
}

const eliminarEscuela = async function (req, res) {
    const { codigo } = req.body;
    try {
        const deleteRowCount = await models.Escuela.destroy({
            where: { codigo: codigo }
        });
        res.json({
            message : 'Escuela eliminada',
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
    crearEscuela,
    consultarEscuela,
    Escuela,
    actualizarEscuela,
    eliminarEscuela
}