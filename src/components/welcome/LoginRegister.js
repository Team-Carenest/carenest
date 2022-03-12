import { useState, useEffect, useRef } from "react";
import { Routes, Route } from 'react-router';

export default function LoginRegister() {
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const expandLogin = () => {

    }

    const expandRegister = () => {

    }

    return (
        <>
        <h1>Login or Register here</h1>
        <div className="registration-buttons">
            <button onClick={expandLogin} id="login">Login</button>
            <button id="register">Register</button>
        </div>
        </>
    )
}