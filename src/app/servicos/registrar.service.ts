import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredenciaisDTO } from '../modelo/credenciais.dto';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }

  registrarUsuario(credenciais: CredenciaisDTO) {
    return this.http.post('/api/usuario', credenciais)
  }

}
