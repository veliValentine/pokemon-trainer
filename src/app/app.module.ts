import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from '../components/loginPage/loginPage.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TrainerPage } from 'src/components/trainerPage/trainerPage.component';
import { CatalogPage } from 'src/components/catalogPage/catalogPage.component';
import { PokemonCard } from 'src/components/pokemonCard/pokemonCard.component';
import { CardContainer } from 'src/components/cardContainer/cardContainer.component';
import { PokemonPage } from 'src/components/pokemonPage/pokemonPage.components';
import { NavBar } from 'src/components/navBar/navBar.component';
import { navButtons } from 'src/components/navButtons/navButtons.components';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CatalogPage,
    PokemonPage,
    // Components
    CardContainer,
    PokemonCard,
    NavBar,
    navButtons
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
