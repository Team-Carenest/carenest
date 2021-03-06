import { useNavigate } from "react-router";

export default function ProfileCard( { config }) {
    const name = config.name;
    const image = require(`../../media/${config.profileImage}`)
    const miniBio = config.miniBio;
    const city = config.city;
    const ZIP = config.ZIP;
    const price = config.price;
    const rating = config.rating;

    const navigate = useNavigate();

    const handleNavigate = (name) => {
        navigate(`/parent/messaging/maria-ament`)
    }

    return (
        <div className="profile-card">
            <div className="top-data">
             {/* <img alt={name} src={`../media/${image}`} /> */}
             <img src={image} alt={name} classname="pic"/>
                <h2 className="nanny">{name}</h2>
              
                <p className="miniBioN">{miniBio}</p>
                <button
                    className="button-style-1"
                    onClick={handleNavigate}>
                        Send a message</button>
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