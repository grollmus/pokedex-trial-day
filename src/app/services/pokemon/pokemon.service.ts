import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes} from './api.routes';
import { IPokemon, PokemonIdentifier } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private readonly httpClient: HttpClient) {}

  get(pokemon: PokemonIdentifier) {
    this.httpClient.get<IPokemon>(apiRoutes.getPokemon(pokemon))
  }
}
