import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegionesComponent } from './components/regiones/regiones.component';
import { PaisesBanderaComponent } from './components/paises-bandera/paises-bandera.component';
import { PaisService } from './services/pais.service';
import { HttpClientModule } from '@angular/common/http';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RegionesComponent,
    PaisesBanderaComponent,
    DetallePaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PaisService],
  bootstrap: [AppComponent],
})
export class AppModule {}
