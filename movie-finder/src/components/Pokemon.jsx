const Pokemon = ({
    pokemon
}) => {
    return (
        <div className="poke-container">
            <img src={pokemon.sprites.front_default} alt="Sprite" className="sprite" />
            <div className="poke-name">{pokemon.pokemon.name}</div>
        </div>
    )
}

export default Pokemon