function SearchBar({ onSearch }) {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a movie..."
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
