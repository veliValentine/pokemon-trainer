import { Component } from "@angular/core";
import { StorageService } from "src/services/storage.service";
import { PokemonBase } from '../../shared/interface'

@Component({
  selector: 'trainerPage',
  templateUrl: './trainerPage.component.html',
  styleUrls: ['./trainerPage.component.css']
})
// TODO redirect to pokemon page on click
export class TrainerPage {
  constructor(private readonly storageService: StorageService) {
  }

  trainer: string = this.storageService.getTrainer();
  collectedPokemons: PokemonBase[] = this.storageService.getPokemons();

  haveCollectedPokemons: boolean = this.collectedPokemons.length > 0;
}


/*
[
  {
    name: 'bulbasaur',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    id: 1
  },
  {
    name: 'ivysaur',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    id: 2
  },
  {
    name: 'venusaur',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    id: 3
  },
  {
    name: 'charmander',
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    id: 4
  }
];
*/