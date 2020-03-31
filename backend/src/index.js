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

const port  = process.env.PORT || 3000;
app.listen(port);
// app.listen(3333);