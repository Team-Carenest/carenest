import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <>
        <h1>Welcome to Carenest</h1>
        <h2>Compassionate childcare solutions for working parents</h2>
        <Link to="/login">Click to Login or Register</Link>
        </>
    );
}