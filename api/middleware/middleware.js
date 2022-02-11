const Users = require('../projects/projects-model');

function logger(req, res, next) {
  console.log(req.url, req.method)
  next()
}

  const validateProjectsId = async (req, res, next) => {
    try{
      const {id} = req.params
      const user = await Users.getById(id)
      if(!user){
        res.status(404).json({message: 'User not found'})
      }else{
        req.user = user
        next()
      }
    }catch(err){
      res.status(500).json({message: err})
    }
}

function validateProjects(req, res, next) {
  try{
    const user = req.body
    if(!user.name){
      res.status(400).json({message: 'Missing required name field'})
    }else{
      next()
    }
  }catch(err){
    console.log(err)
    res.status(500).json({message: err})
  }
}

function validateActions(req, res, next) {
  try{
    const {text} = req.body
    if(!text){
      res.status(400).json({message: 'Missing required text field'})
    }else{
      next()
    }
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateProjectsId,
  validateProjects,
  validateActions
} 