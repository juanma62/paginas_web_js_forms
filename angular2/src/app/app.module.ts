import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludoLocal/saludoLocal.component';
import { MainComponent } from './main/main.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    LogoComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    ContactsComponent,
    SaludoComponent,
    MainComponent,
    SaludoLocalComponent,
    TareasComponent,
    TareasSimpleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }