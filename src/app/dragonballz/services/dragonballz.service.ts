import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/personaje.interface';


@Injectable()
export class DragonballzService {

    // la hacemos privada para evitar que manipulen este array
    // y usamos un getter para tener acceso a esta propiedad fuera de este servicio
    private _personajes: Personaje[] = [
        {
          nombre: 'Freezer',
          poder: 400
        },
        {
          nombre: 'Picolo',
          poder: 300
        }
    ];

    get personajes(): Personaje[] {
        // con esto le quitamos la referencia, ya que js pasa todo por referencia
        return [...this._personajes];
    };

    constructor() { }

    
    agregarPersonaje( personajito: Personaje ): void {
        this._personajes.push(personajito);
    };
};