import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from '../modelo/credenciais.dto';
import { API_CONFIGURACAO } from 'src/configuracoes/configuracao_api';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }

  registrarUsuario(credenciais: CredenciaisDTO) {
    return this.http.post(`${API_CONFIGURACAO.urlBase}/usuario`, credenciais)
  }

}
