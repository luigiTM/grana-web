import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/modelo/usuario.dto';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service/armazenamento.service';
import { UsuarioService } from 'src/app/servicos/modelo/usuario.service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css', '/src/app/app.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: UsuarioDTO

  constructor(private armazenamento: ArmazenamentoService, private usuarioServico: UsuarioService, private roteador: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.armazenamento.getUsuarioLocal() && this.armazenamento.getEmailUsuarioLocal()) {
      this.usuarioServico.buscarPorEmail(this.armazenamento.getEmailUsuarioLocal()).subscribe(response => {
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
