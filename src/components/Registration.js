import React, {useState} from 'react'
import {Alert} from 'react-bootstrap'
import Login from "./Login"

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        }
        else {
            setFlag(false);
            localStorage.setItem("Email",JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));

            console.log("saved in local storage");
            setLogin(!login);
        }
    }

    function handleClick () {
        setLogin(!login);
    }

    return (
        <div className="p-4">
        {login ? (
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="enter full name" 
                onChange={(event)=> setName(event.target.value)} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input 
                type="email" 
                className="form-control" 
                placeholder="enter email address" 
                onChange={(event)=> setEmail(event.target.value)} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="enter password"
                onChange={(event)=> setPassword(event.target.value)} 
                />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right" onClick={handleClick}>Already Registered {" "} login ???</p>

            {flag && (
                <Alert color="primary" variant="danger">
                    please fill out your registration form
                </Alert>
            )}
        </form>
    ):(
        <Login />
    )}

        </div>
    )
}

export default Registration
