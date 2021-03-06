import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicos/autenticar.service/autenticar.service';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/modelo/credenciais.dto';
import { UsuarioService } from 'src/app/servicos/modelo/usuario.service/usuario.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css', '/src/app/app.component.css']
})
export class EntrarComponent implements OnInit {

  credenciais: CredenciaisDTO = {
    nome: "",
    email: "",
    senha: ""
  }

  codigoAcesso: String

  constructor(private autenticador: AutenticarService, private roteador: Router, private usuarioServico: UsuarioService) { }

  ngOnInit(): void {
  }

  autenticarUsuario() {
    if (this.codigoAcesso !== undefined) {
      this.roteador.navigate(['/visualizarGrana', { codigo_acesso: this.codigoAcesso }])
    } else {
      this.autenticador.autenticarUsuario(this.credenciais).subscribe(response => {
        this.autenticador.autorizouUsuario(response.headers.get('Authorization'))
        this.roteador.navigate(['inicio'])
      }, error => { })
    }
  }
}
