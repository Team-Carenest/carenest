import ProfileCard from "../profiles/ProfileCard"
import { store } from '../store/Store';

export default function SearchResults() {
    const defaultProfileMap = () => {
        let arrayOfProfiles = [];
        for (let profile of store.nannyProfiles) {
            arrayOfProfiles.push([
                profile.name,
                profile.profileImage,
                profile.miniBio,
                profile.longBio,
                (profile.city + ' ' + profile.ZIP),
                // profile.skills,
                (profile.rating + ' of 5 stars'),
                // profile.parentFeedback
            ]);
        }
        return arrayOfProfiles.map((item) => {
            return item.map((prop) => <p>{prop}</p>)
        })
    }

    return (
        <>
        <ProfileCard />
        { defaultProfileMap() }
        </>
    )
}