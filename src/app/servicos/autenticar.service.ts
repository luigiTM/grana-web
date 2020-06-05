import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from '../modelo/credenciais.dto';
import { ArmazenamentoService } from './armazenamento.service';
import { UsuarioLocal } from '../modelo/usuario_local';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  private ajudanteJwt: JwtHelperService = new JwtHelperService()

  constructor(private http: HttpClient, private armazenamento: ArmazenamentoService) { }

  autenticarUsuario(credenciais: CredenciaisDTO) {
    return this.http.post("/api/login",
      credenciais,
      {
        observe: 'response',
        responseType: 'text'
      }
    )
  }

  atualizarToken() {
    return this.http.post("/api/autenticacao/atualizarToken", {},
      {
        observe: 'response',
        responseType: 'text'
      }
    )
  }

  autorizouUsuario(valorAutorizacao: String) {
    let tokenAutorizacao = valorAutorizacao.substring(7)
    let usuario: UsuarioLocal = {
      token: tokenAutorizacao,
      email: this.ajudanteJwt.decodeToken(tokenAutorizacao).sub
    }
    this.armazenamento.setUsuarioLocal(usuario)
  }

  sair() {
    this.armazenamento.setUsuarioLocal(null)
  }
}
