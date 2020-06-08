import { Component, OnInit } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { GranaService } from 'src/app/servicos/modelo/grana.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-grana',
  templateUrl: './editar-grana.component.html',
  styleUrls: ['./editar-grana.component.css']
})
export class EditarGranaComponent implements OnInit {

  grana : GranaDTO

  constructor(private roteador : ActivatedRoute, private granaServico : GranaService) { }

  ngOnInit(): void {
    this.roteador.params.subscribe(parametros =>{
      this.granaServico.buscarGranaPorId(parametros['grana_id']).subscribe(response =>{
        this.grana = response
      })
    })
  }

}
