import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) { }

  autenticarUsuario(email: String, senha: String) {
    return this.http.post("/api/login", {
      email,
      senha
    })
  }
}
