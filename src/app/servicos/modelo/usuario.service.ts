import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/modelo/cliente.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http : HttpClient) { }

  buscarPorEmail(email : String) : Observable<UsuarioDTO>{
    return this.http.get<UsuarioDTO>(`api/usuario/email/${email}`)
  }
}
