import React from "react";
import './login.css';
import { Input, Button, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="mainDev">
            <Card 
            header='Login'
            description={loginInput}
            >
               
            </Card>
        </div>
    );
}

const loginInput = () => {
    return (
        <div >
            <div >
                <Input placeholder='Email' className="inputDiv" />
            </div>
            <div >
                <Input placeholder='Password' className="inputDiv" />
            </div>
            <div className="inputDiv">
                <Button color= 'teal' basic >Login</Button>
            </div>
            <div className="extraDiv">
                <div className="extraInput"><Link to="/forget-password">Forget Password</Link></div>
                <div className="extraInput"><Link to="/signup">Sign Up!!!</Link></div>
            </div>
        </div>
    );
}
export default Login;
