const {Router} = require('express');
const {crearMatricula, consultarMatriculas, matriculas, estudiantes_class_group, estudiantes_class, updateMatricula} = require('../controllers/matriculas.controller');
const routerRegistration = Router();

// /api/usuarios/
routerRegistration.post('/crear', crearMatricula); 
routerRegistration.get('/listar', consultarMatriculas);
routerRegistration.post('/consultar', matriculas);
routerRegistration.post('/matriculas', estudiantes_class_group);
routerRegistration.post('/matriculados', estudiantes_class);
routerRegistration.put('/actualizar/:cedulaEs', updateMatricula);
   

module.exports ={
    routerRegistration
} 