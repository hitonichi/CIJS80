import axios from "axios";
const baseUrl = 'https://pokeapi.co/api/v2/pokemon-form'

const get20 = async (offset) => {
    let response = []
    for (let i = 1; i <= 60; i++) {
        const req = await axios.get(`${baseUrl}/${i}`)
        const newPokemon = await req.data
        // console.log(newPokemon);
        response = await response.concat(newPokemon)
    }
    return response
}

export default { get20 }