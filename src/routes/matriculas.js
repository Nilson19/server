const {Router} = require('express');
const {crearRegistration, consultarRegistrations, registrations, regClass, updateRegistration, asignarProfesor} = require('../controllers/matriculas.controller');
const routerRegistration = Router();

// /api/usuarios/
routerRegistration.post('/crear', crearRegistration); 
routerRegistration.get('/listar', consultarRegistrations);
routerRegistration.post('/consultar', registrations);
routerRegistration.post('/matriculas', regClass);
routerRegistration.put('/actualizar/:cedulaEs', updateRegistration);
routerRegistration.put('/asignar/:materiaID', asignarProfesor);
   

module.exports ={
    routerRegistration
} 