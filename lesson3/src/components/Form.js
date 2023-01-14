const Form = ({
    newName,
    newAge,
    handleNameChange,
    handleAgeChange,
    handleAddPerson
}) => {
    return (
        <form onSubmit={handleAddPerson}>
            <div>
                Name: 
                <input
                    value={newName}
                    onChange={handleNameChange}
                    placeholder='Person Name'>
                </input>
            </div>
            <div>
                Age: 
                <input
                    value={newAge}
                    onChange={handleAgeChange}
                    placeholder='Person Age'>
                </input>
            </div>
            <button type="submit">Add new Entry</button>
        </form>
    )
}

export default Form