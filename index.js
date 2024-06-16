const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");

const express= rwequire('express');
const app = express();

app.use(express.json());


// body {
//     
app.post("/todo", async function(req, res){
    const payload= req.body
    const parsedpayload= createTodo.safeParse(payload) // parse

    if (!parsedpayload.success){
        res,status(411).json({
            mssg: "invalid payload"
        })

        return;
    }
    await todo.create({
        title:payload.title,
        time: payload.time,
        status: false
    }
    )

    res.json({
        mssg: "Todo Created"
    })

})

app.get(".todos", async function(req, res){

    const todos= await todo.find({})
    res.json({
        todos
    })

})

app.put("/done", async function(req, res){

    const updatepayload= updateTodo.safeParse(req.body)

    if (!updatepayload.success){
        res,status(411).json({
            mssg: "invalid payload"
        })
    }
    return

    await todo.update({
        _id : req.body.id
    }, {
        status: true
    })
    res.json({
        mssg: "Todo is updated"
    }
    )
})