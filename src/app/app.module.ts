import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrainerPage } from 'src/components/trainerPage/trainerPage.component';
import { CatalogPage } from 'src/components/catalogPage/catalogPage.component';
import { PokemonPage } from 'src/components/pokemonPage/pokemonPage.components';
import { LoginForm } from 'src/components/loginForm/loginForm.component';
import { CardContainer } from 'src/shared/components/cardContainer/cardContainer.component';
import { PokemonCard } from 'src/shared/components/pokemonCard/pokemonCard.component';
import { NavBar } from 'src/shared/components/navBar/navBar.component';
import { navButtons } from 'src/shared/components/navButtons/navButtons.components';

@NgModule({
  declarations: [
    AppComponent,
    TrainerPage,
    CatalogPage,
    PokemonPage,
    // Components
    LoginForm,
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
