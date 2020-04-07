const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//importing routes
const {routerStudent} = require('./routes/estudiantes');
const {routerSchool} = require('./routes/escuelas');
const {routerClass} = require('./routes/materias');
const {routerTeacher} = require('./routes/profesores');
const {routerRegistration} = require('./routes/matriculas');

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/estudiantes', routerStudent);
app.use('/api/escuelas', routerSchool);
app.use('/api/materias', routerClass);
app.use('/api/profesores', routerTeacher);
app.use('/api/matriculas', routerRegistration);
app.use('/', (req,res)=>{
    res.json({
        message: 'Bienvenido'
    })
});

app.listen(3000, () =>{
    console.log('server on port 3000');
});
