//  Todo {
//     title: zstring,
//     time : string,
//     status: string
// }

const  mongoose= require("mongoose")

//  mongodb+srv://kunalseernani:hOo84U49FTSbzwDe@cluster0.o78noph.mongodb.net/todos

mongoose.connect("mongodb+srv://kunalseernani:hOo84U49FTSbzwDe@cluster0.o78noph.mongodb.net/todos")

const todoSchema=mongoose.schema({

    title:string,
    time:string,
    status:string
}) 

const todo= mongoose.model("todos", todoSchema)
module.exports={
    todo
}