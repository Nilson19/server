const {Router} = require('express');
const {crearStudent, consultarStudents, Student, Login, updateStudent, deleteStudent} = require('../controllers/estudiantes.controller');
const routerStudent = Router();

// /api/usuarios/
routerStudent.post('/crear', crearStudent); 
routerStudent.get('/listar', consultarStudents);
routerStudent.post('/consultar', Student);
routerStudent.post('/login', Login);
routerStudent.put('/actualizar/:cedula', updateStudent);
routerStudent.post('/eliminar', deleteStudent); 
   

module.exports ={
    routerStudent
} 