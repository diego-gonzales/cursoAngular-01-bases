import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DragonballzService } from '../services/dragonballz.service';

@Component({
  selector: 'app-mostrar-personajes',
  templateUrl: './mostrar-personajes.component.html',
  styles: [
  ]
})
export class MostrarPersonajesComponent {
  
  get misPersonajes() {
    return this.dragonballzService.personajes;
  }


  constructor(private dragonballzService: DragonballzService) {
    
  }
}
