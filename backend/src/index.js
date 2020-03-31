const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors(

    //     { 
    //         origin: 'http://meuapp.com'
    //     }
));

//aceitar requisições com json
app.use(express.json());
app.use(routes);

var porta = process.env.PORT || 8080;
app.listen(porta);
// app.listen(3333);