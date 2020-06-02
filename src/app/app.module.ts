import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { RegistrarService } from './servicos/registrar.service';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    TelaInicialComponent,
    RegistrarComponent,
    EntrarComponent,
    InicioComponent,
    BarraLateralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path : '',
        component : TelaInicialComponent
      },{
        path: 'registrar',
        component : RegistrarComponent
      },{
        path : 'entrar',
        component : EntrarComponent
      },{
        path : 'inicio',
        component : InicioComponent
      }
    ])
  ],
  providers: [RegistrarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
