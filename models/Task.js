const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, 'firstname is required'],
        trim: true,
        maxlength: [20, 'name cannot be more than 30 characters']
    },
    lastname:{
        type: String,
        required: [true, 'lastname is required'],
        trim: true,
        maxlength: [20, 'name cannot be more than 30 characters']
    },
})

module.exports = mongoose.model('Task', TaskSchema)