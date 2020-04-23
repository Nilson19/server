const {Router} = require('express');
const {crearAsignacion, consultarAsignacion, Asignacion, actualizarAsignacion} = require('../controllers/asignacion.controller');
const routerAsignations = Router();

// /api/usuarios/
routerAsignations.post('/crear', crearAsignacion); 
routerAsignations.get('/listar', consultarAsignacion);
routerAsignations.post('/consultar', Asignacion);
routerAsignations.put('/actualizar/:materiaID', actualizarAsignacion);
   

module.exports ={
    routerAsignations
} 