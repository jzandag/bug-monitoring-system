const mongoose = require('mongoose')

//Models
const Bug = require('./Bug')
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    dueDate:{
        type: Date,
        required: true, 
        trim: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
}, {
    timestamps: true
})

projectSchema.virtual('bugs', {
        ref: 'bugs',
        localField: '_id',
        foreignField: 'project'
    }
)

projectSchema.pre('remove', async function(next){
    const project = this

    const bugs = await Bug.deleteMany({
        project: project._id
    })
    next()
})

const Project = mongoose.model('projects', projectSchema)

module.exports = Project