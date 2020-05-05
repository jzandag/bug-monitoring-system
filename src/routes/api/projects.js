const express = require('express')
const router = express.Router()

//models
const Project = require('../../models/Project')

//C
router.post('/', async (req,res) => {
    const project = new Project(req.body)
    try{
        await project.save()
        res.status(201).send(project)
    }catch(error){
        res.status(400).json(error)
    }
})

//R
router.get('/', async (req,res) => {
    try {
        const projects = await Bug.find()
        res.send(projects)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const project = await Project.find({
            _id
        })
        res.send(project)
    } catch (error) {
        res.status(400).send(error)
    }
})

//U
router.patch('/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowed = ['name', 'description', 'dueDate', 'manager']

    const isValid = updates.every( a => allowed.includes(a))
    if(!isValid)
        return res.status(400).json({error: 'Invalid updates'})
        
    try {
        const project = await Project.findOne({_id: req.params.id})
        
        if(!project)
            res.status(404).send({error: 'Bug not found'})
        
        updates.forEach( u => {
            project[u] = req.body[u]
        })

        await project.save()
        res.send(project)
    } catch (error) {
        res.send(400).send(error)
    }
})

//D
router.delete('/:id', async(req,res) => {
    
    try {
        const project = await Project.findById(req.params.id)

        if(!project)
            return res.status(404).json({ error: 'Project not found'})

        await project.remove()

        res.send({success: 'Project deleted'})
    } catch (error) {
        res.send(400).send(error)
    }
})

module.exports = router