const CreateTaskQueue = () => {
    const taskQueue = []
    return {
        get() {
            return taskQueue
        },
        push(task) {
            taskQueue.push(task)
        },
        pop() {
            return taskQueue.shift()
        },
        isEmpty() {
            return taskQueue.length === 0
        }
    }
}


export default CreateTaskQueue