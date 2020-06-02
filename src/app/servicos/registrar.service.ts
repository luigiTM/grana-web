import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }

  registrarUsuario(nome : String, email : String, senha : String) {
    return this.http.post('/api/usuario', {
      nome,
      email,
      senha
    })
  }

}
