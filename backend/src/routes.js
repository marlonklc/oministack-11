const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')

const routes = express.Router()

routes.get('/ongs', OngController.get)
routes.post('/ongs', OngController.insert)
routes.post('/incidents', IncidentController.insert)
routes.get('/incidents', IncidentController.get)
routes.delete('/incidents/:id', IncidentController.delete)
 
module.exports = routes