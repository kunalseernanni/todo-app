const { createTodo, updateTodo } = require("./types");

const express= rwequire('express');
const app = express();

app.use(express.json());


// body {
//     
app.post("/todo", function(req, res){
    const payload= req.body
    const parsedpayload= createTodo.safeParse(payload) // parse

    if (!parsedpayload.success){
        res,status(411).json({
            mssg: "invalid payload"
        })

        return;
    }


})

app.get(".todos", function(req, res){

})

app.put("/done", function(req, res){

    const updatepayload= updateTodo.safeParse(req.body)

    if (!updatepayload.success){
        res,status(411).json({
            mssg: "invalid payload"
        })
    }
    return
})