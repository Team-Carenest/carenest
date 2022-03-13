import { store } from "../store/Store";
import { useNavigate } from "react-router";

export default function NannyProfile() {
    const navigate = useNavigate();

    const name = store.nannyProfiles[0].name;
    const src = require(`../../media/${store.nannyProfiles[0].profileImage}`);
    
    const navToCalendar = () => {
        navigate('/nanny/maria/schedule')
    }

    return (
        <div className="nanny-profile">
            <img src={src} alt={name} />
            <h1>{name}</h1>

            <p>{store.nannyProfiles[0].longBio}</p>

            <button onClick={navToCalendar}>Show current schedule</button>
        </div>
    );
}