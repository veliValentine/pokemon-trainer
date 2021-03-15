import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Pages
import { TrainerPage } from 'src/pages/trainerPage/trainerPage.component';
import { CatalogPage } from 'src/pages/catalogPage/catalogPage.component';
import { PokemonPage } from 'src/pages/pokemonPage/pokemonPage.components';
import { LoginForm } from 'src/pages/loginForm/loginForm.component';
import { ErrorPage } from 'src/pages/errorPage/errorPage.component';
// Components
import { CardContainer } from 'src/shared/components/cardContainer/cardContainer.component';
import { PokemonCard } from 'src/shared/components/pokemonCard/pokemonCard.component';
import { NavBar } from 'src/shared/components/navBar/navBar.component';
import { navButtons } from 'src/shared/components/navButtons/navButtons.components';

@NgModule({
  declarations: [
    // pages
    AppComponent,
    TrainerPage,
    CatalogPage,
    PokemonPage,
    LoginForm,
    ErrorPage,
    // Components
    CardContainer,
    PokemonCard,
    NavBar,
    navButtons,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
