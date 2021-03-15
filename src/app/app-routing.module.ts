import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPage } from 'src/components/catalogPage/catalogPage.component';
import { LoginPage } from 'src/components/loginPage/loginPage.component';
import { PokemonPage } from 'src/components/pokemonPage/pokemonPage.components';
import { TrainerPage } from 'src/components/trainerPage/trainerPage.component';
import { AuthenticationGuard } from 'src/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'trainer',
    component: TrainerPage,
    canActivate: [ AuthenticationGuard ]
  },
  {
    path: 'pokemons',
    component: CatalogPage,
    canActivate: [ AuthenticationGuard ]
  },
  {
    path: 'pokemon/:id',
    component: PokemonPage,
    canActivate: [ AuthenticationGuard ]
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
