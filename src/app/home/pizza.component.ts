import {Component, OnInit} from '@angular/core';

class Pizza {
  constructor(
    public name: string,
    public price30cm: string,
    public price40cm: string,
    public elements: PizzaElement[]) {
  }
}

enum PizzaElement {
  mozzarella = 'Ser mozzarella',
  feta = 'Ser feta',
  parmezan = 'Ser parmezan',

  pomidorowy = 'Sos pomidorowy',
  czosnkowy = 'Sos czosnkowy',
  szczypiorek = 'Sos pesto',
  majonezowo_jogurtowy = 'Sos miodowo-musztardowy',
  diabolo = 'Sos meksykański',
  // majonezowo_jogurtowy = 'Sos amerykański',

  salami = 'Salami',
  boczek = 'Boczek',
  kurczak = 'Kurczak',
  szynka = 'Szynka',
  szynka_parmenska = 'Szynka parmeńska',

  bazylia = 'Przyprawa bazylia',
  chili = 'Przyprawa chili',
  cebula = 'Cebula',
  papryka = 'Papryka',
  pieczarki = 'Pieczarki',
  brokuly = 'Brokuły',
  kukurydza = 'Kukurydza',
  ananas = 'Ananas',
  pomidor = 'Pomidory',
  oliwki_cz = 'Czarne oliwki',
  rucola = 'Rukola',
  fasolka_sz = 'Jalapeno',
  fasolka_cz = 'Gotowany burak',
}

@Component({
  selector: 'app-home',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.styl']
})
export class PizzaComponent implements OnInit {
  keys = Object.keys;
  pizzaElement = PizzaElement;

  pizzaList = [
    new Pizza('Vermer', '20,00 zł', '24,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
    ]),
    new Pizza('Bacon', '31,00 zł', '38,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.boczek,
      PizzaElement.szynka,
      PizzaElement.cebula,
    ]),
    new Pizza('Velasquez', '27,00 zł', '37,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.kurczak,
      PizzaElement.brokuly,
      PizzaElement.kukurydza,
      PizzaElement.cebula,
    ]),
    new Pizza('Rothko', '30,00 zł', '37,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.salami,
      PizzaElement.papryka,
    ]),
    new Pizza('Matisse', '27,00 zł', '33,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.szynka,
      PizzaElement.ananas,
    ]),
    new Pizza('Cezanne', '30,00 zł', '37,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.szynka_parmenska,
      PizzaElement.pieczarki,
      PizzaElement.boczek,
      PizzaElement.brokuly,
      PizzaElement.salami,
    ]),
    new Pizza('Salvador', '37,50 zł', '47,50 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.czosnkowy,
      PizzaElement.cebula,
      PizzaElement.papryka,
      PizzaElement.pomidor,
      PizzaElement.kukurydza,
    ]),
    new Pizza('Picasso', '32,00 zł', '40,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.szynka,
      PizzaElement.pieczarki,
    ]),
    new Pizza('Van Gogh', '33,00 zł', '41,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.feta,
      PizzaElement.szczypiorek,
      PizzaElement.pomidor,
      PizzaElement.oliwki_cz,
      PizzaElement.rucola,
    ]),
    new Pizza('Frida', '30,00 zł', '37,00 zł', [
      PizzaElement.mozzarella,
      PizzaElement.pomidorowy,
      PizzaElement.szynka,
      PizzaElement.pieczarki,
      PizzaElement.oliwki_cz,
    ]),
    // new Pizza('Santi', '30,00 zł', '37,00 zł', [
    //   PizzaElement.mozzarella,
    //   PizzaElement.szczypiorek,
    //   PizzaElement.kurczak,
    //   PizzaElement.fasolka_cz, /*burak*/
    // ]),
  ];

  constructor() {
  }

  ngOnInit()
    :
    void {
  }

}
