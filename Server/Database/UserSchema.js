import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName : {
        type:String
    },
    Email :{
        type:String
    },
    Password:{
        type:String
    },
});


export const userData = mongoose.model('regester',userSchema);