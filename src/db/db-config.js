const mongoose = require('mongoose')

const dbName = process.env.MONGODB_URL
//env-cmd -f path
mongoose.connect(dbName, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
})

