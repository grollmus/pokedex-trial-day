import { PokemonIdentifier } from "./pokemon.interface";

const baseRoute = 'https://pokeapi.co/api/v2/';

export const apiRoutes = {
    getPokemon: (pokemon: PokemonIdentifier) => `${baseRoute}pokemon/${pokemon}`,
    getAbilites: (pokemon: PokemonIdentifier) => `${baseRoute}ability/${pokemon}`,
}