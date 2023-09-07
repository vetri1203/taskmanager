import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const HandleSignup = (e)=>{
        e.preventDefault();
       console.log(FirstName,LastName,email,password);
       navigate('/home');
       setEmail('');
       setFirstName('');
       setLastName('');
       setPassword('');

    }



    const emailChange=(e)=>{
        setEmail(e.target.value);
    }
    const firstChange = (e) => {
        setFirstName(e.target.value);
    }
    const lastChange = (e)=>{
        setLastName(e.target.value);
    };

    const passChange = (e) =>{
        setPassword(e.target.value);
    }

    return (
        <>
            <div className="signupContainer">
                <h1 className="signupName">Signup</h1>



                <form action="post" onSubmit={HandleSignup}>
                    <label htmlFor="first">First Name :</label>
                    <input type="text" id="first"
                       
                        value={FirstName}
                        onChange={firstChange}
                        placeholder="Enter first Name *"  required/> <br />

                    <label htmlFor="Last">Last Name :</label>
                    <input type="text"
                        
                        value={LastName}
                        id="Last"
                        onChange={lastChange}
                        placeholder="Enter Last Name *" required /> <br />


                    <label htmlFor="email">email  :</label>
                    <input type="email"
                        
                        value={email}
                        onChange={emailChange}
                        placeholder="Enter email  *" required/> <br />


                    <label htmlFor="password">password  :</label>
                    <input type="password"
                        value={password}
                        onChange={passChange}
                        placeholder="Enter password  *" required /> <br />

                    <button type="submit">Signup</button>
                    
                </form>
            </div>
        </>
    )
}

export default Signup;