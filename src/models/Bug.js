const mongoose = require('mongoose')

//Model
const BugHistory = require('./BugHistory')
const BugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    description: {
        type: String,
        default: 'Created at '+ Date.now
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'users'
    },
    priority: {
        type: String,
        required: true
    },
    project: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'projects' 
    },
}, {
    timestamps: true
})

BugSchema.virtual('history', {
    ref: 'bug_histories',
    localField: '_id',
    foreignField: 'bug'
})

BugSchema.virtual('user', {
    ref: 'users',
    localField: 'createdBy',
    foreignField: '_id'
})

BugSchema.pre('remove', async function(next){
    const bug = this

    const bug_histories = await BugHistory.deleteMany({
        bug: bug._id
    })

    next()
})

const Bug = mongoose.model('bugs', BugSchema)

module.exports = Bug