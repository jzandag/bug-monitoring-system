const express = require('express')
const cors = require('cors')
require('./db/db-config')

//routes
const bugRouter = require('./routes/api/bug')
const userRouter = require('./routes/api/user')
const projectRouter = require('./routes/api/projects')
const bugHistoryRouter = require('./routes/api/projects')

const app = express()
const PORT = process.env.PORT || 3000

//Dont forget these, it converts all request into json
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/bugs', bugRouter)
app.use('/users', userRouter)
app.use('/projects', projectRouter)
app.use('/bughistory', bugHistoryRouter)

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('../client/build/'))
}

app.listen(PORT, ()=> console.log(`Server started at PORT:${PORT}`))