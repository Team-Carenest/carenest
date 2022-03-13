import SearchBar from "../SearchPage/SearchBar";

export default function Navbar() {
    const logo = require('../../media/CarenestLogo.png');

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" url='/' />
            <SearchBar />
        </div>
    );
}