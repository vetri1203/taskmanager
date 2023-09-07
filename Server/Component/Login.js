import { userData } from "../Database/UserSchema.js";


export const Login = async(req,res)=>{

    const {Email,Password} = req.body;

    if(!Email || !Password)
    {
        res.status(400).send({message : "enter the the email and password.."});


    }
    else{
        const data =await userData.findOne({Email:Email});
        if(data){
            // res.send(`${data.Password}`);
            const check = data.Password;
        
            if(Password == check)
            {
                res.send({message:"user Found"});
            }
            else{
                res.send({message : "please enetr the correct password"});
            }



        }
        else{
            res.send({message : "please check the email"});
        }
    }
    // console.log("from login page");
    // res.send({message: "message from login page"});
}