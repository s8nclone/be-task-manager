const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send("All tasks available")
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTasks = (req, res) => {
    res.send("update tasks")
}

const getSingleTask = (req, res) => {
    res.send("get single task")
}

const deleteTasks = (req, res) => {
    res.send("Task has been deleted")
}

module.exports = {
    getAllTasks,
    createTasks,
    updateTasks,
    getSingleTask,
    deleteTasks
}