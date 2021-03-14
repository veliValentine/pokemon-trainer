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
/*
TODO
Pokemon catalog
- Pagination ?
Pokemon
- collect button (Available for uncollected pokemons)
StorageService
- move functionality from storage helper here
localStorage
- convert to typescript
*/
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
