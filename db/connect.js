const mongoose = require('mongoose')

// const connectionString = 'mongodb+srv://s8nclone:invaliddb54321@cluster0.bf5yn1a.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
            .connect(url)
            .then(() => console.log("Connected to the DB..."))
            .catch((err) => console.log(err))
}

module.exports = connectDB