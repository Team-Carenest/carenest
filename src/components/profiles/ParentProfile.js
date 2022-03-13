import { store } from "../store/Store";
import { useNavigate } from "react-router";

export default function ParentProfile() {
    const navigate = useNavigate();

    const name = store.parentProfiles[0].name;
    const src = require('../../media/FamilyPicture.jpg');

    const handleNavToSearch = () => {
        navigate('/parent/search');
    }

    return (
        <div className="parent-profile">
            <img src={src} alt={name} />
            <h1>{name}</h1>

            <p>{store.parentProfiles[0].longBio}</p>

            <button onClick={handleNavToSearch}>Search available caretakers</button>
        </div>
    );
}