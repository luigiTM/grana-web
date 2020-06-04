import { Injectable } from '@angular/core';
import { CHAVES_ARMAZENAMENTO } from 'src/configuracoes/chaves_armazenamento.config';
import { UsuarioLocal } from '../modelo/usuario_local';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoService {

  constructor() { }

  getUsuarioLocal(): UsuarioLocal {
    let usuario = localStorage.getItem(CHAVES_ARMAZENAMENTO.usuarioLocal)
    if (usuario == null) {
      return null
    } else {
      return JSON.parse(usuario)
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
