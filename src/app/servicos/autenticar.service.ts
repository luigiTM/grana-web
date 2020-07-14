import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from '../modelo/credenciais.dto';
import { ArmazenamentoService } from './armazenamento.service';
import { UsuarioLocal } from '../modelo/usuario_local';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient, private armazenamento: ArmazenamentoService) { }

  autenticarUsuario(credenciais: CredenciaisDTO) {
    return this.http.post(`${environment.urlBase}/login`,
      credenciais,
      {
        observe: 'response',
        responseType: 'text'
      }
    )
  }

  atualizarToken() {
    return this.http.post(`${environment.urlBase}/autenticacao/atualizarToken`, {},
      {
        observe: 'response',
        responseType: 'text'
      }
    )
  }

  autorizouUsuario(valorAutorizacao: String) {
    let tokenAutorizacao = valorAutorizacao.substring(7)
    let usuario: UsuarioLocal = {
      token: tokenAutorizacao
    }
    this.armazenamento.setUsuarioLocal(usuario)
  }

  sair() {
    this.armazenamento.setUsuarioLocal(null)
  }
}
