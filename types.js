const zod = require("zod")

const createTodo= zod.object({
    title: zod.string(),
    time : zod.string(),
    status: zod.string()
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}