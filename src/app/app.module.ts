import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from '../components/loginPage/loginPage.component'
import { ReactiveFormsModule } from '@angular/forms';
/*
TODO
TrainerPage
- Dummy data
Pokemons
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
    LoginPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
