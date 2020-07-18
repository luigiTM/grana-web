import { Component, OnInit } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { GranaService } from 'src/app/servicos/modelo/grana.service/grana.service';
import { ActivatedRoute } from '@angular/router';
import { GastoDTO } from 'src/app/modelo/gasto.dto';
import { GastoService } from 'src/app/servicos/modelo/gasto.service/gasto.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-editar-grana',
  templateUrl: './editar-grana.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./editar-grana.component.css', '/src/app/app.component.css']
})
export class EditarGranaComponent implements OnInit {

  grana: GranaDTO
  gastos: GastoDTO[]
  colunas: String[] = ['tipo', 'valor'];
  expandedElement: GastoDTO | null;

  constructor(private roteador: ActivatedRoute, private granaServico: GranaService, private gastoServico: GastoService) { }

  ngOnInit(): void {
    this.roteador.params.subscribe(parametros => {
      this.granaServico.buscarGranaPorId(parametros['grana_id']).subscribe(response => {
        this.grana = response
        this.gastos = this.grana.gastos
      }, error => {
        console.log(error)
      })
    })
  }

}
