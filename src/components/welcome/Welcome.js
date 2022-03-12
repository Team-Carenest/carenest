import { useNavigate } from "react-router";

export default function Welcome() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <>
        <h1>Welcome to Carenest</h1>
        <h2>Compassionate childcare solutions for working parents</h2>

        <div className="welcome-options">
            <button className="button-style-1" onClick={handleLogin}>Login</button>
            <button className="button-style-1" onClick={handleRegister}>Register</button>
        </div>
        </>
    );
}