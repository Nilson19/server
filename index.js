const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//importing routes
const {routerStudent} = require('./src/routes/estudiantes');

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/estudiantes', routerStudent);

app.listen(3000, () =>{
    console.log('server on port 3000');
});
