import { userData } from "../Database/UserSchema.js";
export const Signup = async (req, res) => {

    const { FirstName, LastName, Email, Password } = req.body;

    if (!FirstName || !LastName || !Password || !Email) {
        res.status(400).send({ message: "Enter all the required details" });
        return;
    }
    else {
        const data = await userData.findOne({ Email: Email });

        if (data) {
            console.log("user Found");
            res.send("already exsist");
        }
        else {

            const body = req.body;
            const newuser = await userData.create({
                Email: req.body.Email,
                FirstName:body.FirstName,
                LastName:body.LastName,
                Password : body.Password


                
            })

            try {
                if (newuser) {
                    console.log("new user created");
                    res.send(`create ${newuser}`);
                }


                else {
                    console.log("no");
                    res.send("not create");

                }
            }
            catch (err) {
                res.status(500).send({ message: err });
            }

        }

    }

}