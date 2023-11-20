const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 5000

//middleware
app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.send("This is working!")
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`));
        
    } catch (error) {
        console.log(error)
    }
}

start()
