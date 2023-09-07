import { TodoModel } from "../Database/TodoModel.js";


export const Delete = async (req,res) =>{
    // res.send({message:'delete'});


    const work = req.body.WorkTitle;
    if(!work)
    {
        res.send({message : "enter the work title"});
    }
    else{
        const data = TodoModel.findOne({WorkTitle:work});

        if(data)
        {
            // const del = await TodoModel.delete(data);
            
                res.send("deleted")
            
        }
        else{
            res.send("no work found");
        }
    }
}
