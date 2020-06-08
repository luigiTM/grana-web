import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/modelo/cliente.dto';
import { API_CONFIGURACAO } from 'src/configuracoes/configuracao_api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  buscarPorEmail(email : String) : Observable<UsuarioDTO>{
    return this.http.get<UsuarioDTO>(`${API_CONFIGURACAO.urlBase}/usuario/email/${email}`)
  }
}
