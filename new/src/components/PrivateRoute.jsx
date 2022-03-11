import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const { token, error } = useSelector((state) => ({ token: state.loginReducer.token, error: state.loginReducer.error }));
    if (!token) { 
        return <Navigate to="/login"></Navigate>
    }
    return (
        children
    )
}