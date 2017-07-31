import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header.component';
import { BodyComponent } from './componentes/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ //min 8.10 listado de componentes q tendra nuestra app
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [ // configuraciones globales
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [], //servicios. Archivos compartidos a lo largo de toda la app
  bootstrap: [AppComponent] //este es la pagina por donde queremos comenzar
                            //por donde arranca nuestra app
})
export class AppModule { }
