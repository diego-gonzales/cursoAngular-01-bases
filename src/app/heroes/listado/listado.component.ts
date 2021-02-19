import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman'];
  heroeBorrado: string = ''; // un string vacio es igual a decir false, null, undefined

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift();
  };


}
