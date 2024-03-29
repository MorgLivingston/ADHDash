const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const projectController = require('../controllers/project')
const {ensureAuth, ensureGuest} = require('../middleware/auth')


router.get('/', ensureAuth, dashController.getDash)
router.get('/addProject', dashController.addProject)
router.get('/project', projectController.getProject)
router.put('/markComplete/:id', projectController.markComplete)
router.put('/markIncomplete/:id', projectController.markIncomplete)
router.delete('/deleteProject/:id', projectController.deleteProject)
module.exports = router