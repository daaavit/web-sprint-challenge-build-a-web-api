const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')
const { logger, handleError } = require('./projects/projects-middleware')

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use(express.json())
server.use('/api/actions', actionsRouter)
server.use('/api/projects', logger, projectsRouter)



server.use('*', (req, res, next) => {
    next({
        status: 404,
        message: `${req.method} ${req.originalUrl} not found!`
    })
})

module.exports = server