const router = require('express').Router()
const accountController = require('../controller/accountController')

router.get('/getAll', accountController.getAll)
router.get('/getOne/:id', accountController.getOne)
router.post('/register', accountController.register)
router.put('/update/:id', accountController.update)
router.delete('/delete/:id', accountController.delete)

module.exports = router