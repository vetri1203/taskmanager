import { TodoModel } from "../Database/TodoModel.js";


export const Todo = async(req,res)=>{
    // res.send({message:"message from Todo Post"});

    const {WorkTitle,WorkDescription} = req.body;
    if(!WorkTitle || !WorkDescription)
    {
        res.send({message:"please enter both work title and description"});
    }
    else{
        const body = req.body;
        const data =await TodoModel.create({
            WorkTitle:body.WorkTitle,
            WorkDescription:body.WorkDescription
        });


        try{
            if(data){
                res.send({message:"your work is added"});
            }
            else{
                res.send({message:"unable to add the work"});
            }
        }
        catch(err){
            res.send({message:`something went worng while while adding work`});
        }
    }
    
}