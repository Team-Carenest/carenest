import { useState } from "react"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState(null);

    return (
        <div className="searchbar">
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} defaultValue="Enter a name or search term"></input>
        </div>
    );
}