const mongoose = require('mongoose')

const bugHistorySchema = new mongoose.Schema({
    history: {
        type: String, 
        required: true
    },
    bug: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'bugs'
    }
}, {
    timestamps: true
})

const BugHistory = mongoose.model('bug_histories', bugHistorySchema)

module.exports = BugHistory