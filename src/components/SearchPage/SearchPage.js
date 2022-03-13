import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

export default function SearchPage() {
    return (
        <>
        <SearchBar />
        <div className="sidebar">
            {/* Pass in sidebar here, directly */}
        </div>
        <SearchResults />
        </>
    )
}