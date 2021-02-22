import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {
  
  nuevoPersonaje: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1200
  };

  // get personajes(): Personaje[] {
  //   return this.dragonballzService.personajes;
  // }
  
}
