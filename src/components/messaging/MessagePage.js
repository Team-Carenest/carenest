import { useNavigate } from "react-router";
import { useState } from "react";
import mariaImage from '../../media/babysitter.jpg';

export default function MessagePage() {
    const [typing, setTyping] = useState('');
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/parent/search');
    }

    return (
        <div className="nanny-chat">
            <img alt="Maria" url={mariaImage} />
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
                {typing ? <p>Me:</p> : null}
                {typing ? <p>...</p> : null}
            </div>

            <textarea onChange={(e) => e.target.value ? setTyping(e.target.value) : setTyping(null)}>
            </textarea>

            <button>Send Message</button>
            <button onClick={navigateBack}>Back</button>
        </div>
    );
}