import Pokemon from "./Pokemon"

const PokeList = ({
    pokemons
}) => {
    return (
        <div className="list-container">
            {pokemons.map(pokemon => {
                return (
                    <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
                )
            })}
        </div>
    )
}

export default PokeList