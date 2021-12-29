const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');
const TechController = require('./controller/TechController');
const ReportController = require('./controller/ReportController');

routes.get('/users', UserController.findAll);
routes.post('/users', UserController.create);

routes.get('/users/:user_id/addresses', AddressController.findAll);
routes.post('/users/:user_id/addresses', AddressController.create);

routes.get('/users/:user_id/techs', TechController.findAll);
routes.post('/users/:user_id/techs', TechController.create);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/reports', ReportController.show);

module.exports = routes;