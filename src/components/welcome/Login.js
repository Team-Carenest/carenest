import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

    })

    const handleLogin = () => {
        if (!username || !password) {
            return;
        }

        if (username && password) {
            console.log('you can login!');
        }
    }

    const handleNav = () => {
        navigate('/');
    }

    return (
        <>
        <h1 className="login-header">Please enter your login details:</h1>
        <form className="login-form">
            <div className="form-row">
                <label htmlFor="username">Username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} required></input>
            </div>

            <div className="form-row">
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} required></input>
            </div>

            <button className="button-style-1" onClick={handleLogin}>Login</button>

            <button className="back-button" onClick={handleNav}>Back</button>
        </form>
        </>
    )
}