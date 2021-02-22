import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contadores/contador.module';
import { DragonballzModule } from './dragonballz/dragonballz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DragonballzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
