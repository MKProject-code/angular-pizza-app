import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaComponent} from './home/pizza.component';
import {NapojeComponent} from './napoje/napoje.component';
import {PromocjeComponent} from './promocje/promocje.component';
import {KontaktComponent} from './kontakt/kontakt.component';

const routes: Routes = [
  {path: '', component: PromocjeComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'napoje', component: NapojeComponent},
  {path: 'promocje', component: PromocjeComponent},
  {path: 'kontakt', component: KontaktComponent},
  // {path: ':stateName/:cityName', component: ShopListComponent},
  {path: '**', component: PizzaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
