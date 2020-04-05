const {Router} = require('express');
const {crearStudent, consultUsuarios, oneUsuario, consultarLogin} = require('../controllers/estudiantes.controller');
const router = Router();

// /api/usuarios/
router.post('/crear', crearStudent); 
router.get('/consultar', consultUsuarios); 
   

module.exports ={
    router
} 