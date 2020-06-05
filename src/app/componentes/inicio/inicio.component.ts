import { Component, OnInit } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { GranaService } from 'src/app/servicos/modelo/grana.service';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service';
import { UsuarioDTO } from 'src/app/modelo/cliente.dto';
import { UsuarioService } from 'src/app/servicos/modelo/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: UsuarioDTO
  granas: GranaDTO[]

  constructor(private granaServico: GranaService, private armazenamento: ArmazenamentoService, private usuarioServico: UsuarioService, private roteador : Router) { }

  ngOnInit(): void {
    if (this.armazenamento.getUsuarioLocal() != null) {
      this.usuarioServico.buscarPorEmail(this.armazenamento.getUsuarioLocal().email).subscribe(response => {
        this.usuario = response
        this.granaServico.buscarGranasPorUsuario(this.usuario.idUsuario.toString()).subscribe(response => {
          this.granas = response['content']
        }, error => { console.log(error) })
      }, error => { console.log(error) })
    }
    else{
      this.roteador.navigate(['/'])
    }
  }
}
