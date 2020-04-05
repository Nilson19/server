const {Router} = require('express');
const {createUsuario, consultUsuarios, oneUsuario, consultarLogin} = require('../controllers/estudiantes.controller');
const router = Router();

// /api/usuarios/
router.post('/crear', createUsuario); 

   

module.exports ={
    router
} 