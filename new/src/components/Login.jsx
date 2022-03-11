import { Button, Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {loginFailure,loginSuccess} from "../Redux/Login/action";
import axios from 'axios';

export const Login = () => {
    const [details, setDetails] = React.useState({});
    const { token, error } = useSelector((state) => ({ token: state.loginReducer.token, error: state.loginReducer.error }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { id, value } = e.target;
        setDetails({ ...details, [id]: value });
    }
    const handleClick = () => {
        console.log(details);
        axios.post("https://kiranamlist.herokuapp.com/login", details).then((response) => {
            console.log("response", response);
            dispatch(loginSuccess(response.data.token));
            navigate('/')
            })
            .catch((error) =>
            console.log("error",error),
            dispatch(loginFailure(error)));
    }
    return (
        <div className="loginDiv">
            <h1 style={{color:"white",fontSize:"2em",fontWeight:"bold",fontStyle:"italic"}}>Login here!</h1>
            <Input type="text" id="Email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <Input type="password" id = "Password" placeholder="Enter your Password" onChange={handleChange} /><br/><br/>
            <Button  type="primary" onClick={handleClick}>Login</Button> <br/><br/><br/>
            <h1 style={{color:'white'}}>Create a new account ? <Link to="/register"> <Button >Register </Button></Link></h1>
           
        </div>
    )
}