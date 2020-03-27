const express = require('express');
const OngController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfilesController');
const SessionController = require('./controllers/SessionsControler');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)



module.exports = routes;