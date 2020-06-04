import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicos/autenticar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  constructor(public autenticador: AutenticarService, public roteador: Router) { }

  ngOnInit(): void {
    this.autenticador.atualizarToken().subscribe(response => {
      this.autenticador.autorizouUsuario(response.headers.get('Authorization'))
      this.roteador.navigate(['inicio'])
    }, error => { console.log(error) }
    )
  }
  
}
