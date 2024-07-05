import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Animal[];

  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Chanchito",
        edad: 3,
        imagen: "https://i.pinimg.com/originals/94/9a/ce/949ace63891c7dab1183de5b005005ac.png",
        alt: "Un chanchito"
      },
      {
        id: "",
        nombre: "pato",
        edad: 5,
        imagen: "https://i.pinimg.com/236x/5a/73/6e/5a736e1ce94c35525826d5cef1da85e6.jpg",
        alt: "Un pato"
      },
      {
        id: "",
        nombre: "una vaca",
        edad: 9,
        imagen: "https://static.vecteezy.com/system/resources/previews/012/957/641/non_2x/illustration-of-cute-cow-animal-suitable-for-children-s-book-design-elements-introduction-of-animals-to-children-books-about-animals-or-animal-posters-vector.jpg",
        alt: "Una vaca"
      }
    ]
  }
}

