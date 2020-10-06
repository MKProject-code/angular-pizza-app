import {Component, OnInit} from '@angular/core';

class Drink {
  constructor(
    public title: string,
    public subtitle: string,
    public amount: string,
    public price: string,
    public file: string) {
  }
}

@Component({
  selector: 'app-napoje',
  templateUrl: './napoje.component.html',
  styleUrls: ['./napoje.component.styl']
})
export class NapojeComponent implements OnInit {

  drinkList = [
    new Drink('Pepsi', '', '300 ml', '6,00 zł', 'pepsi.png'),
    // new Drink('Coca-Cola', '', '300 ml', '6,00 zł', 'coca-cola.png'),
    new Drink('Sprite', '', '300 ml', '6,00 zł', 'sprite.png'),
    new Drink('Fanta', '', '300 ml', '6,00 zł', 'fanta.png'),
    new Drink('Cappy', 'sok jabłkowy', '300 ml', '5,00 zł', 'cappy-sok_jablkowy.png'),
    new Drink('Cappy', 'sok pomarańczowy', '300 ml', '5,00 zł', 'cappy-sok_pomaranczowy.png'),
    new Drink('Cappy', 'sok brzoskwiniowy', '300 ml', '5,00 zł', 'cappy-sok_brzoskwiniowy.png'),
    new Drink('Nestea', 'cytryna', '300 ml', '5,00 zł', 'nestea-cytryna.png'),
    new Drink('Nestea', 'brzoskwinia', '300 ml', '5,00 zł', 'nestea-brzoskwinia.png'),
    new Drink('Nestea', 'zielona herbata', '300 ml', '5,00 zł', 'nestea-zielona_herbata.png'),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
