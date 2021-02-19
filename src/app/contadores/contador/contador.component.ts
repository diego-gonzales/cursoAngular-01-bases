import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: {{base}}</h3>
        
        <button (click)="operacion(-base)">-{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="operacion(base)">+{{base}}</button>
    `
})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    // inputcito: string = prompt("Ingrese una base");
    // base = parseInt(this.inputcito);
    base: number = 2;

    operacion( valor: number ) {
      this.numero += valor;
    };
};