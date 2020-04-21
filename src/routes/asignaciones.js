const {Router} = require('express');
const {crearAsignacion, consultarAsignations, Asignations, checkAsignation, updateAsignations} = require('../controllers/asignacion.controller');
const routerAsignations = Router();

// /api/usuarios/
routerAsignations.post('/crear', crearAsignacion); 
routerAsignations.get('/listar', consultarAsignations);
routerAsignations.post('/consultar', Asignations);
routerAsignations.put('/actualizar/:materiaID', updateAsignations);
   

module.exports ={
    routerAsignations
} 