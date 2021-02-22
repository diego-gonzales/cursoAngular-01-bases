import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

import { DragonballzService } from '../services/dragonballz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styles: [
  ]
})
export class AgregarPersonajeComponent {

  @Input() nuevoPersonajeChild: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dragonballzService: DragonballzService) {
    
  }

  agregar(): void {

    if (this.nuevoPersonajeChild.nombre.trim().length === 0) { return; };

    this.dragonballzService.agregarPersonaje(this.nuevoPersonajeChild);
    
    this.nuevoPersonajeChild = {
      nombre: '',
      poder: 0
    };
  }

}
