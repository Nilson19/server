const models = require('../database/models');

const crearMatricula = async function (req, res){

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


const consultarMatriculas = async function (req, res){
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

const estudiantes_class_group = async function (req, res){
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

const estudiantes_class = async function (req, res){
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

const matriculas = async function (req, res){
    const{cedulaEs} = req.body;
    try{
        const adicionadas = await models.Matricula.findAll({
            include:[{
                model: models.Materia,
                required: true,
                attributes:['nombre']
            }],
            where:{
                cedulaEs
            }
        })
        res.json({
            data: adicionadas
        })
    }catch(e){
        res.json({
            message: 'Hubo un error'
        })
    }

}

const updateMatricula = async function (req, res) {
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
    crearMatricula,
    consultarMatriculas,
    matriculas,
    estudiantes_class_group,
    estudiantes_class,
    updateMatricula,
}

