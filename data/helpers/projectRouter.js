const express = require('express')
const router = express.Router();
const dbproject = require('./projectModel')
router.use(express.json())

router.get('/', (req, res) =>{
    dbproject.get()
    .then( project => {
        res.status(200).json(project)
    })
    .catch( error => {
        res.status(500).json({error:{message: " error getting data"}})
    })
})

router.post('/', (req, res) => {
    const newProject = req.body 
    dbproject.insert(newProject)
    .then( project => {
        res.status(200).json(project)
    }).catch( error => {
        res.status(500).json({error:{message: " error getting data "}})
    })
})

router.put('/:id', (req, res) => {
    const updateProject = req.body
    const id = req.params.id

    dbproject.update(id, updateProject)
    .then( project => {
        res.status(200).json(project)
    })
    .catch( err => {
        res.status(500).json({ error: err, message:"could not update id"})
    })
})

router.delete('/:id', (req, res) => {
    const deleteProject = req.params.id
    dbaction.remove(deleteProject)
    .then( action => {
        if(action) {
            dbaction.remove(deleteProject).then(
                removeAction => {
                res.status(201).json(removeAction)
                })
        } else {
            res.status(404).json({ error: err, message: "The user id does not exist"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "User could not be removed"})
    })
})


module.exports  = router