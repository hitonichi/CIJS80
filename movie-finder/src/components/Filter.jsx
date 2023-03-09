const Filter = ({
    filter,
    handleFilterChange
}) => {
    return (
        <div className="filter-container">
            <form>
                <input
                    className="filter"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder='Your movie name...'></input>
            </form>
        </div>
    )
}

export default Filter