const {Router} = require('express');
const {crearEscuela, consultarEscuela, Escuela, actualizarEscuela, eliminarEscuela} = require('../controllers/escuelas.controller');
const routerSchool = Router();

// /api/usuarios/
routerSchool.post('/crear', crearEscuela); 
routerSchool.get('/listar', consultarEscuela);
routerSchool.post('/consultar', Escuela);
routerSchool.put('/actualizar/:codigo', actualizarEscuela);
routerSchool.post('/eliminar', eliminarEscuela); 
   

module.exports ={
    routerSchool
} 