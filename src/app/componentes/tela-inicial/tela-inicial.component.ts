import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicos/autenticar.service/autenticar.service';
import { Router } from '@angular/router';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service/armazenamento.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css','/src/app/app.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(private autenticador: AutenticarService, private roteador: Router, private armazenamento: ArmazenamentoService) { }

  ngOnInit(): void {
    if (this.armazenamento.getUsuarioLocal() != null) {
      this.autenticador.atualizarToken().subscribe(response => {
        this.autenticador.autorizouUsuario(response.headers.get('Authorization'))
        this.roteador.navigate(['inicio'])
      }, error => { console.log(error) }
      )
    }
  }
}
