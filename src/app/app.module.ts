import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PizzaComponent} from './home/pizza.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NapojeComponent} from './napoje/napoje.component';
import { PromocjeComponent } from './promocje/promocje.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    HeaderComponent,
    NapojeComponent,
    PromocjeComponent,
    KontaktComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
