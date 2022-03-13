import { store } from "../store/Store";
import { useNavigate } from "react-router";

export default function ParentProfile() {
    const navigate = useNavigate();

    const handleNavToSearch = () => {
        navigate('/parent/search');
    }

    return (
        <>
        <h1>{store.parentProfiles[0].name}</h1>

        <p>{store.parentProfiles[0].longBio}</p>

        <button onClick={handleNavToSearch}>Search available caretakers</button>
        </>
    );
}