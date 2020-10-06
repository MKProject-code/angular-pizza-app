import { Component, OnInit } from '@angular/core';

class Promo {
  constructor(
    public title: string,
    public subtitle: string,
    public price: string,
    public file: string) {
  }
}

@Component({
  selector: 'app-promocje',
  templateUrl: './promocje.component.html',
  styleUrls: ['./promocje.component.styl']
})
export class PromocjeComponent implements OnInit {

  promoList = [
    new Promo('Duży zestaw', 'Dwie dowolne duże pizzee z dowolnym napojem', '70,00 zł', 'promo-2pizze.png'),
    new Promo('Mały zestaw', 'Dwie dowolne małe pizzee z dowolnym napojem', '55,00 zł', 'promo-2pizze.png'),
    new Promo('Dostawa gratis', 'Na wszystkie produkty na terenie Katowic', '0,00 zł', 'promo-dostawa.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
