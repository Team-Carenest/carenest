import ProfileCard from "../profiles/ProfileCard"
import ParentProfileCard from "../profiles/ParentProfileCard"
import { store } from '../store/Store';

export default function SearchResults() {
    const mapProfileConfig = () => {
        let details = [];
        for (let profile of store.nannyProfiles) {
            details.push({
                name: profile.name,
                profileImage: profile.profileImage,
                miniBio: profile.miniBio,
                city: profile.city,
                ZIP: profile.ZIP,
                price: profile.price,
            });
        }

        return details;
    }

    const mapOntoCards = () => {
        const details = mapProfileConfig();

        let toComponent = [];

        for (let config of details) {
            toComponent.push(<ProfileCard config={config} />);
        }

        return (
            <>
            {toComponent}
            </>
        );
    }

    return (
        <>
        { mapOntoCards() }
        <ParentProfileCard />
        </>
    )
}