import mongoose from "mongoose";


const TodoSchema = mongoose.Schema({
    WorkTitle : {
        type:String
    },
    WorkDescription:{
        type:String

    }
});

export const TodoModel = mongoose.model('TodoData',TodoSchema);