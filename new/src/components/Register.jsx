import { Button, Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {registerSuccess,registerFailed} from "../Redux/Register/action"
import "./Style.css";
import axios from 'axios';
export const Register = () => {
    const [form, setForm] = React.useState({});
    const { token } = useSelector((state) => ({token: state.registerReducer.token }));
    
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {id, value} = e.target;
        setForm({...form,[id]:value});
    }
    const navigate=useNavigate();
    const handleClick = () => {
        axios.post("https://kiranamlist.herokuapp.com/register",form).then((response) => {
            console.log(response);
            dispatch(registerSuccess(response.data));
            navigate('/login')
        }).catch((error) => {
            console.log(error.message);
            dispatch(registerFailed(error.message))
        })
    }
    if (token) {
        return <Navigate to="/login"/>
    }
    return (
        <div className="mainDiv">
            <h1 style={{color:'white'}}>Register here!</h1>
            <Input type="text" id="Name" placeholder="Enter your Name" onChange={handleChange}/><br/><br/>
            <Input type="text" id="Email" placeholder="Enter your Email" onChange={handleChange}/><br/><br/>
            <Input type="password" id="Password" placeholder="Enter your Password" onChange={handleChange}/><br/><br/>
            <Input type="text" id="Gender" placeholder="Enter your Gender" onChange={handleChange}/><br/><br/>
            <Input type="text" id="Mobile" placeholder="Enter your Mobile" onChange={handleChange}/><br/><br/>
            <Input type="number" id="Age" placeholder="Enter your Age" onChange={handleChange} /><br/><br/>
            <Button type="primary"  onClick={handleClick}>Register</Button> <br /><br /><br />
            <h1 style={{color:'white'}}>Already Registered ? <Link to="/login"> <Button>Login</Button> </Link></h1>
        </div>
    )
}