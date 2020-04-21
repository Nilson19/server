const {Router} = require('express');
const {crearRegistration, consultarRegistrations, registrations, regClass, regClassEs, updateRegistration} = require('../controllers/matriculas.controller');
const routerRegistration = Router();

// /api/usuarios/
routerRegistration.post('/crear', crearRegistration); 
routerRegistration.get('/listar', consultarRegistrations);
routerRegistration.post('/consultar', registrations);
routerRegistration.post('/matriculas', regClass);
routerRegistration.post('/matriculados', regClassEs);
routerRegistration.put('/actualizar/:cedulaEs', updateRegistration);
   

module.exports ={
    routerRegistration
} 