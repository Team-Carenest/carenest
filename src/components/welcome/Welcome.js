import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <>
        <h1>Welcome to Carenest</h1>
        <h2>Compassionate childcare solutions for working parents</h2>

        <div className="welcome-options">
            <button className="button-style-1" onClick={() => navigate('/login')}>Login</button>
            <button className="button-style-1" onClick={() => navigate('/register')}>Register</button>
        </div>
        </>
    );
}