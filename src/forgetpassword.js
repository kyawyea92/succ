import React from "react";
import './login.css';
import { Input, Button, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
const ForgetPassword = () => {
    return (
        <div className="mainDev">
            <Card 
            header='Forget Password?'
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
                <Input placeholder='Please enter your email' className="inputDiv" />
            </div>
            <div className="inputDiv">
                <Button basic color="teal" >Search</Button>
            </div>
            <div className="extraDiv">
                <div className="extraInput"><Link to="/login">Log In</Link></div>
                <div className="extraInput"><Link to="/signup">Sign Up!!!</Link></div>
            </div>
        </div>
    );
}
export default ForgetPassword;
