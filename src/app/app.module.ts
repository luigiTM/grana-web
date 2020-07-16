import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ErroInterceptadorProvider } from 'src/interceptadores/erro.interceptor';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { TelaInicialComponent } from './componentes/tela-inicial/tela-inicial.component';
import { ArmazenamentoService } from './servicos/armazenamento.service/armazenamento.service';
import { UsuarioService } from './servicos/modelo/usuario.service/usuario.service';
import { RegistrarService } from './servicos/registrar.service/registrar.service';
import { AutenticacaoInterceptadorProvider } from 'src/interceptadores/autenticacao.interceptor';
import { GranaService } from './servicos/modelo/grana.service/grana.service';
import { NovoGranaComponent } from './componentes/novo-grana/novo-grana.component';
import { EditarGranaComponent } from './componentes/editar-grana/editar-grana.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BarraInferiorComponent } from './componentes/barra-inferior/barra-inferior.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    TelaInicialComponent,
    RegistrarComponent,
    EntrarComponent,
    InicioComponent,
    PerfilComponent,
    NovoGranaComponent,
    EditarGranaComponent,
    BarraInferiorComponent
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
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: '',
        component: TelaInicialComponent
      }, {
        path: 'registrar',
        component: RegistrarComponent
      }, {
        path: 'entrar',
        component: EntrarComponent
      }, {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'novoGrana',
        component: NovoGranaComponent
      },{
        path: 'editarGrana',
        component: EditarGranaComponent
      }
    ])
  ],
  providers: [RegistrarService,
    ArmazenamentoService,
    UsuarioService,
    GranaService,
    AutenticacaoInterceptadorProvider,
    ErroInterceptadorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
