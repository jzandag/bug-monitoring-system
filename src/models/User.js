const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//Model calls
const Bug = require('./Bug')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(val){
            if(val.includes('password'))
                throw new Error('Passowrd easy')
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Email invalid')
        }
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    },
    type: {
        type: String,
        default: 'developer',
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.virtual('bugs', {
    ref: 'bugs',
    localField: '_id',
    foreignField: 'createdBy'
})

userSchema.methods.toJSON = function (){
    const user = this.toObject()

    delete user.avatar
    delete user.tokens
    delete user.password 

    return user
}

userSchema.methods.generateAuthToken = async function() {
    const user = this

    const token = await jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
    
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password)=>{

    const user = await User.findOne({email,})

    if(!user)
        throw new Error('No such user with email')

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch)
        throw new Error('Wrong password')
    return user
}



//hash pasword
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 8) 

    next()
})

userSchema.pre('remove', async function(next) {
    const user = this

    const bugs = await Bug.deleteMany({createdBy: user._id})

    next()
})
const User = mongoose.model('users', userSchema)

module.exports = User