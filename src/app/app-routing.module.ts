import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisesBanderaComponent } from './components/paises-bandera/paises-bandera.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [{ path: '', component: PrincipalComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
