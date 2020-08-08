import { Component, OnInit } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { GranaService } from 'src/app/servicos/modelo/grana.service/grana.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoDTO } from 'src/app/modelo/gasto.dto';

@Component({
  selector: 'app-visualizar-grana',
  templateUrl: './visualizar-grana.component.html',
  styleUrls: ['./visualizar-grana.component.css', '/src/app/app.component.css']
})
export class VisualizarGranaComponent implements OnInit {

  grana: GranaDTO
  gastos: GastoDTO[]
  colunas: String[] = []
  pessoas : String[] = []

  constructor(private roteadorAtivo: ActivatedRoute, 
              private granaServico: GranaService,
              private roteador: Router) { }

  ngOnInit(): void {
    this.roteadorAtivo.params.subscribe(parametros => {
      if(parametros['grana_id'] !== undefined){
      this.granaServico.buscarGranaPorId(parametros['grana_id']).subscribe(response => {
        this.grana = response
        this.gastos = this.grana.gastos
        this.preencherColunas()
      }, error => {
        console.log(error)
      })
    }
  else if(parametros['codigo_acesso'] !== undefined){
    this.granaServico.buscarGranaPorCodigoAcesso(parametros['codigo_acesso']).subscribe(response => {
      this.grana = response
      this.gastos = this.grana.gastos
      this.preencherColunas()
    }, error => {
      console.log(error)
    })
  }})
  }

  editarGrana(){
    this.roteador.navigate(['/editarGrana', { grana: this.grana }])
  }

  preencherColunas() {
    for (let chave in this.gastos[0]) {
      if (!(chave == "idGasto") && !(chave == "gastosPessoas")) {
        this.colunas.push(chave)
      }
    }
    for(let gasto of Object.values(this.gastos)){
      for(let gastoPessoa of Object.values(gasto.gastosPessoas)){
          if(this.pessoas.indexOf(gastoPessoa.pessoa.nome) < 0){
            this.pessoas.push(gastoPessoa.pessoa.nome)
          }
      }
    }
    this.colunas = this.colunas.concat(this.pessoas)
  }
}
