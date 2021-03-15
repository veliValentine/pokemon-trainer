import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPage } from 'src/pages/catalogPage/catalogPage.component';
import { LoginForm } from 'src/pages/loginForm/loginForm.component';
import { PokemonPage } from 'src/pages/pokemonPage/pokemonPage.components';
import { TrainerPage } from 'src/pages/trainerPage/trainerPage.component';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { ErrorPage } from 'src/pages/errorPage/errorPage.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginForm
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
    path: 'error',
    component: ErrorPage
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
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
