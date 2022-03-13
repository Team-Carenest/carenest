import { useState, useEffect } from "react";
import ProfileCard from "../profiles/ProfileCard"
import { store } from '../store/Store';

export default function SearchResults() {
    const [profileConfig, setProfileConfig] = useState([]);

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
                // other props, formatted props:
                // profile.longBio,
                // profile.skills,
                // (profile.city + ' ' + profile.ZIP),
                // (profile.rating + ' of 5 stars'),

                // profile.parentFeedback
            });
        }

        return details;

        // THE BELOW FOR TESTING PATHS TO ACCESS VALUES
        // return arrayOfProfiles.map((item) => {
        //     return item.map((prop) => <p>{prop}</p>)
        // })
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
        )
    }

    return (
        <>
        { mapOntoCards() }
        <ProfileCard />
        </>
    )
}