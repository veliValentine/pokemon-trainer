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
/*
TODO
Pokemon catalog
- Dummy data
- List each card
- Linking (console.log pokemon ID)
- Pagination ?
Pokemon
- info
- collect
*/
@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    TrainerPage,
    CatalogPage,
    CardContainer,
    PokemonCard
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
