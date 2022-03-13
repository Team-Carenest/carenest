import ProfileCard from "../profiles/ProfileCard"
import { store } from '../store/Store';

export default function SearchResults() {
    const defaultProfileMap = () => {
        let arrayOfProfiles = [];
        for (let profile of store.nannyProfiles) {
            arrayOfProfiles.push(<p>{profile.name}</p>);
        }
        return arrayOfProfiles.map((name) => <p>{name}</p>)
    }

    return (
        <>
        <ProfileCard />
        { defaultProfileMap() }
        </>
    )
}