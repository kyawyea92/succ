import React from "react";
import './login.css';
import { Input, Button, Card } from 'semantic-ui-react'
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
                <Button primary >Login</Button>
            </div>
            <div className="extraDiv">
                <div className="extraInput"><a href="#">Forget Password</a></div>
                <div className="extraInput"><a href="#">Sign Up!!!</a></div>
            </div>
        </div>
    );
}
export default Login;
