import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipeComponent } from './components/pipe/pipe.component';

//lineas que debemos añadir
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';



@NgModule({
  declarations: [AppComponent, PipeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},{provide: LOCALE_ID, useValue:"es" }, SQLite],
  bootstrap: [AppComponent],
})
export class AppModule {}
