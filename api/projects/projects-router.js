// Write your "projects" router here!
const router = require('express').Router()

const Projects = require('./projects-model')
const Action = require('../actions/actions-model')

const {
    validateProjects,
    validateActions,
    validateProjectsId
} = require('../middleware/middleware')

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err, 'error')
            res.status(500).json({ message: 'Cant fetch users' })
        })
})

module.exports = router