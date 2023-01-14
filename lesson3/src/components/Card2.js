function Card2 ({person}) {
    return (
        <div className="card-container">
        <h2 className="card-name">Name: {person.name}</h2>
        <div className="card-age">Age: {person.age}</div>
    </div>
    )
}

export default Card2