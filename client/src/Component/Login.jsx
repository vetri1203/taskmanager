import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Login = ()=>{


    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const emailChange =(e)=>{
        // console.log(email);

        setEmail ( e.target.value);
        
    }

    const passChange = (e)=>{
        setPassword ( e.target.value);
    }


                        //handling form submit

    const HandleSubmit = (e)=>{
        e.preventDefault();
        console.log(email,password);
        setEmail('');
        setPassword('');
        navigate('/home');
    }
    return(
        <>
        <div className="container">
            <h1 className="loginName">Login</h1>

            <form action="post" onSubmit={HandleSubmit}>

                <label htmlFor="email">Email :</label>
                <input type="email" id="email"
                 placeholder="Enter the Email *"
                 required
                 value={email}
                 onChange={emailChange}
                 /> <br />

                <label htmlFor="password">Password :</label>
                <input type="password" id="password"
                 required placeholder="Enter the Password *"
                 value={password}
                 onChange={passChange}
                 /> <br />

                <button type="submit">Login</button>

            </form>

            {/* <button onClick={signupNavigate}>Signup</button> */}

            <Link to='/signup'>Signup</Link>
        </div>
        </>
    )
}

export default Login;