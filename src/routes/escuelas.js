const {Router} = require('express');
const {crearSchool, consultarSchools, School, updateSchool, deleteSchool} = require('../controllers/escuelas.controllers');
const routerSchool = Router();

// /api/usuarios/
routerSchool.post('/crear', crearSchool); 
routerSchool.get('/listar', consultarSchools);
routerSchool.post('/consultar', School);
routerSchool.put('/actualizar/:codigo', updateSchool);
routerSchool.post('/eliminar', deleteSchool); 
   

module.exports ={
    routerSchool
} 