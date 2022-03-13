export default function ProfileCard( { config }) {
    const name = config.name;
    const image = config.profileImage;
    const miniBio = config.miniBio;
    const city = config.city;
    const ZIP = config.ZIP;
    const price = config.price;
    const rating = config.rating;

    return (
        <div className="profile-card">
            <div className="top-data">
                <h1>{name}</h1>
                <img alt={name} src={`../../media/${image}`} />
                <p>{miniBio}</p>
                <button className="button-style-1">Send a message</button>
            </div>

            <div className="skills">
                <div className="profile-skill">Map through skills here</div>
            </div>

            <div className="bottom-data">
                <p>{city + ' ' + ZIP}</p>
                <p>{rating}</p>
                <p>{'$' + price + '/hour'}</p>
            </div>
        </div>
    )
}