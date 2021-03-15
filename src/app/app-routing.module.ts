import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPage } from 'src/components/catalogPage/catalogPage.component';
import { LoginPage } from 'src/components/loginPage/loginPage.component';
import { PokemonPage } from 'src/components/pokemonPage/pokemonPage.components';
import { TrainerPage } from 'src/components/trainerPage/trainerPage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'trainer',
    component: TrainerPage
  },
  {
    path: 'pokemons',
    component: CatalogPage
  },
  {
    path: 'pokemon/:id',
    component: PokemonPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemons'
  }/*,
  {
    path: '**',
    component: 'ErrorPage'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
