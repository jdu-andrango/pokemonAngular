import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  name: string = '';
  urlImage: SafeResourceUrl | null = null;

  constructor(
    private pokemonService: PokemonService,
    private sanitizer: DomSanitizer
  ) { }

  search() {
    this.pokemonService.getPokemon(this.name).subscribe((data: any) => {
      console.log(data)
      this.urlImage = this.getPokemonImageUrl(data);
    });
  }

  getPokemonImageUrl(pokemon: any): SafeResourceUrl {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

  getPokemonEvolucion(pokemon: any): SafeResourceUrl {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

}
