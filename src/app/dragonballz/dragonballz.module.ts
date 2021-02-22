import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { MostrarPersonajesComponent } from './mostrar-personajes/mostrar-personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';

import { DragonballzService } from './services/dragonballz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    MostrarPersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent,
  ],
  providers: [
    DragonballzService
  ]
})
export class DragonballzModule { }
