import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicos/autenticar.service';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/modelo/credenciais.dto';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  credenciais: CredenciaisDTO = {
    nome: "",
    email: "",
    senha: ""
  }

  constructor(private autenticador: AutenticarService, private roteador: Router) { }

  ngOnInit(): void {
  }

  autenticarUsuario() {
    this.autenticador.autenticarUsuario(this.credenciais).subscribe(response => {
      this.autenticador.autorizouUsuario(response.headers.get('Authorization'))
      //Logar usuario antes de redirecionar
      this.roteador.navigate(['inicio'])
    }, error => { })
  }

}
