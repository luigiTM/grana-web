import { Component, OnInit } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { GranaService } from 'src/app/servicos/modelo/grana.service/grana.service';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service/armazenamento.service';
import { UsuarioDTO } from 'src/app/modelo/usuario.dto';
import { UsuarioService } from 'src/app/servicos/modelo/usuario.service/usuario.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NovoGranaComponent } from '../novo-grana/novo-grana.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: UsuarioDTO
  granas: GranaDTO[]

  constructor(private dialogoNovoGrana: MatDialog, private granaServico: GranaService, private armazenamento: ArmazenamentoService, private usuarioServico: UsuarioService, private roteador: Router) { }

  ngOnInit(): void {
    if (this.armazenamento.getUsuarioLocal() != null) {
      this.usuarioServico.buscarPorEmail(this.armazenamento.getEmailUsuarioLocal()).subscribe(response => {
        this.usuario = response
        this.granaServico.buscarGranasPorUsuario(this.usuario.id.toString()).subscribe(response => {
          this.granas = response['content']
        }, error => { console.log(error) })
      }, error => { console.log(error) })
    }
    else {
      this.roteador.navigate(['/'])
    }
  }

  temGrana(): Boolean {
    if (this.granas == undefined) {
      return false
    } else {
      return this.granas.length > 0
    }
  }

  criarGrana() {
    let resultado = this.dialogoNovoGrana.open(NovoGranaComponent)
    resultado.afterClosed().subscribe(dados => {
      if (dados != null) {
        this.granaServico.salvarGrana(dados).subscribe(response => {
        }, error => {
          console.log(error)
        })
      }
    })
  }

  editarGrana(grana_id: String) {
    this.roteador.navigate(['/editarGrana', { grana_id: grana_id }])
  }

}
