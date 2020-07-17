import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/modelo/usuario.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  buscarPorEmail(email : String) : Observable<UsuarioDTO>{
    return this.http.get<UsuarioDTO>(`${environment.urlBase}/usuario/email/${email}`)
  }
}
