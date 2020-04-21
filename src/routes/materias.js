const {Router} = require('express');
const {crearClass, consultarClass, Class, classForSchool, updateClass, deleteClass} = require('../controllers/materias.controller');
const routerClass = Router();

// /api/usuarios/
routerClass.post('/crear', crearClass); 
routerClass.get('/listar', consultarClass);
routerClass.post('/consultar', Class);
routerClass.post('/consultar2', classForSchool);
routerClass.put('/actualizar/:codigo', updateClass);
routerClass.post('/eliminar', deleteClass); 
   

module.exports ={
    routerClass
} 