import { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    
    const [profileType, setProfileType] = useState('none');

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!profileType) {
            return;
        }

        if (profileType === 'nanny') {
            navigate('/nanny/maria');
        }
        
        if (profileType === 'parent') {
            navigate('/parent/elsie');
        }
    }

    const navigateBack = () => {
        navigate('/');
    }

    return (
        <>
        <h1>Thanks for joining our community!</h1>
        <h2>Please enter the information below:</h2>
        <form className="register-form">

            <div className="form-row">
                <label htmlFor="register-username">Enter your username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} required></input>
            </div>

            <div className="form-row">
                <label htmlFor="register-password-1">Enter your password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} required></input>
            </div>

            <div className="form-row">
                <label htmlFor="register-password-2">Re-enter your password: </label>
                <input type="text" onChange={(e) => setVerifyPassword(e.target.value)} required></input>
            </div>

            <div className="form-row">
                <label htmlFor="register-typeof-account">Select an account type: </label>
                <select onChange={(e) => setProfileType(e.target.value)} id="register-typeof-account">
                    <option value="none" selected disabled defaultValue>---</option>
                    <option value="parent">Parent</option>
                    <option value="nanny">Nanny</option>
                </select>
            </div>
        </form>

        <button onClick={handleSubmit}>Register your account</button>
        <button onClick={navigateBack}>Back</button>
        </>
    );
}