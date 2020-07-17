import { Injectable } from '@angular/core';
import { CHAVES_ARMAZENAMENTO } from 'src/configuracoes/chaves_armazenamento.config';
import { UsuarioLocal } from '../../modelo/usuario_local';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {

  private ajudanteJwt: JwtHelperService = new JwtHelperService()

  constructor() { }

  getUsuarioLocal(): UsuarioLocal {
    let usuario = localStorage.getItem(CHAVES_ARMAZENAMENTO.usuarioLocal)
    if (usuario == null) {
      return null
    } else {
      return JSON.parse(usuario)
    }
  }

  getidLocal(): String {
    let usuario = localStorage.getItem(CHAVES_ARMAZENAMENTO.usuarioLocal)
    if (usuario == null) {
      return null
    } else {
      return this.ajudanteJwt.decodeToken(JSON.parse(usuario).token).user_id
    }
  }

  getEmailUsuarioLocal(): String {
    let usuario = localStorage.getItem(CHAVES_ARMAZENAMENTO.usuarioLocal)
    if (usuario == null) {
      return null
    } else {
      return this.ajudanteJwt.decodeToken(JSON.parse(usuario).token).sub
    }
  }

  setUsuarioLocal(usuario: UsuarioLocal) {
    if (usuario == null) {
      localStorage.removeItem(CHAVES_ARMAZENAMENTO.usuarioLocal)
    } else {
      localStorage.setItem(CHAVES_ARMAZENAMENTO.usuarioLocal, JSON.stringify(usuario))
    }
  }
}
