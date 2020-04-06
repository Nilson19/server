const {Router} = require('express');
const {crearTeacher, consultarTeachers, Teacher, Login, updateTeacher, deleteTeacher} = require('../controllers/profesores.controller');
const routerTeacher = Router();

// /api/usuarios/
routerTeacher.post('/crear', crearTeacher); 
routerTeacher.get('/listar', consultarTeachers);
routerTeacher.post('/consultar', Teacher);
routerTeacher.post('/login', Login);
routerTeacher.put('/actualizar/:cedula', updateTeacher);
routerTeacher.post('/eliminar', deleteTeacher); 
   

module.exports ={
    routerTeacher
} 