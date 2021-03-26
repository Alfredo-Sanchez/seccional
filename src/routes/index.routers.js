const { Router } = require('express');
const router = Router()

//controllers
const controller = require('../controllers/index.controllers')

//routes
router.get('/', controller.index)
router.get('/socios', controller.socios)
router.get('/socio/:id', controller.getSocio)


module.exports = router