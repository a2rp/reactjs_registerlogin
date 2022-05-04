import React, {useState} from 'react'
import { Alert } from 'react-bootstrap';
import Home from "./Home"

function Login() {
    const [emaillog,setEmaillog] = useState("");
    const [passwordlog,setPasswordlog] = useState("");
    const [flag,setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(event) {
        event.preventDefault();
        let email = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("Empty");
        }
        else if (passwordlog!==pass || emaillog!==email) {
            setFlag(true);
        }
        else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div>
            {home ? (
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="enter email address" 
                    onChange={(event)=> setEmaillog(event.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="enter password"
                    onChange={(event)=> setPasswordlog(event.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                {flag && (
                    <Alert color="primary" variant="danger">
                        please fill correct info
                    </Alert>
                )}
            </form>
            ):(
                <Home />
            )}
        </div>
    )
}

export default Login
