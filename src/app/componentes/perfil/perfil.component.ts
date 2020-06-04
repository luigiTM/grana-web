import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/modelo/cliente.dto';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service';
import { UsuarioService } from 'src/app/servicos/modelo/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: UsuarioDTO

  constructor(public armazenamento: ArmazenamentoService, public usuarioServico: UsuarioService, public roteador: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let usuarioLocal = this.armazenamento.getUsuarioLocal()
    if (usuarioLocal && usuarioLocal.email) {
      this.usuarioServico.buscarPorEmail(usuarioLocal.email).subscribe(response => {
        this.usuario = response
      }, error => {
        if (error.status == 403) {
          this.roteador.navigate(["/"]);
        }
      })
    }
    else {
      this.roteador.navigate(["/"]);
    }
  }

}
