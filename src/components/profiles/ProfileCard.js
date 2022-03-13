export default function ProfileCard( { config }) {
    return (
        <div className="profile-card">
            <div className="top-data">
                <h1>Profile name</h1>
                <p>Image</p>
                <p>Mini bio</p>
                <button className="button-style-1">Send a message</button>
            </div>

            <div className="skills">
                <div className="profile-skill">Map through skills here</div>
            </div>

            <div className="bottom-data">
                <p>Location</p>
                <p>Rating</p>
                <p>Price</p>
            </div>
        </div>
    )
}