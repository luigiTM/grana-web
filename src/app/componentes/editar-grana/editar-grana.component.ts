import { Component, OnInit } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { GranaService } from 'src/app/servicos/modelo/grana.service/grana.service';
import { ActivatedRoute } from '@angular/router';
import { GastoDTO } from 'src/app/modelo/gasto.dto';
import { PessoaDTO } from 'src/app/modelo/pessoa.dto';
import { GastoService } from 'src/app/servicos/modelo/gasto.service/gasto.service';

@Component({
  selector: 'app-editar-grana',
  templateUrl: './editar-grana.component.html',
  styleUrls: ['./editar-grana.component.css']
})
export class EditarGranaComponent implements OnInit {

  grana : GranaDTO
  gastos : GastoDTO[]
  pessoas : PessoaDTO[]

  constructor(private roteador : ActivatedRoute, private granaServico : GranaService, private gastoServico : GastoService) { }

  ngOnInit(): void {
    this.roteador.params.subscribe(parametros =>{
      this.granaServico.buscarGranaPorId(parametros['grana_id']).subscribe(response =>{
        this.grana = response
      }, error => {
        console.log(error)
      })
        this.gastoServico.buscarGastosPorGrana(parametros['grana_id']).subscribe(response =>{
          this.gastos = response
        },error =>{
          console.log(error)
        })
    })
  }

}
