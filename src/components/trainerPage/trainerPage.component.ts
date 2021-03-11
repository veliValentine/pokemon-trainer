import { Component } from "@angular/core";
import { PokemonBase } from '../../utils/interface'
import { getPokemons, getTrainer } from '../../utils/storageHelper.js'

@Component({
  selector: 'trainerPage',
  templateUrl: './trainerPage.component.html',
  styleUrls: ['./trainerPage.component.css']
})
// TODO redirect to pokemon page on click
export class TrainerPage {
  trainer: string = getTrainer();
  collectedPokemons: PokemonBase[] = getPokemons();
  haveCollectedPokemons: boolean = this.collectedPokemons && this.collectedPokemons.length > 0;
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