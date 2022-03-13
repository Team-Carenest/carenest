import { useNavigate } from "react-router";
import { store } from "../store/Store";

export default function MessagePage() {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/parent/search');
    }

    return (
        <div className="nanny-chat">
            <h1>Conversation with Maria W. Ament</h1>
            <div className="nanny-bubble">
                <p>Maria:</p>
                <p>Hi Elsie! Thanks so much for being in touch!</p>
            </div>
            <div className="nanny-bubble">
                <p>Maria:</p>
                <p>What questions can I answer for you?</p>
            </div>
            <div className="parent-bubble">
                <p>Me:</p>
                <p>...</p>
            </div>
            <button onClick={navigateBack}>Back</button>
        </div>
    );
}