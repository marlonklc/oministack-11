const express = require('express')

const OngController = require('./controllers/OngController')

const routes = express.Router()

routes.get('/ongs', OngController.get)
routes.post('/ongs', OngController.save)
 
module.exports = routes