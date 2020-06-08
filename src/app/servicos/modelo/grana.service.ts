import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { API_CONFIGURACAO } from 'src/configuracoes/configuracao_api';

@Injectable({
  providedIn: 'root'
})
export class GranaService {

  constructor(private http: HttpClient) { }

  buscarGranasPorUsuario(usuario_id: string) {
    return this.http.get(`${API_CONFIGURACAO.urlBase}/grana/paginado/?usuario=${usuario_id}`)
  }

  salvarGrana(grana : GranaDTO){
    return this.http.post(`${API_CONFIGURACAO.urlBase}/grana`, grana)
  }

  buscarGranaPorId(grana_id : String){
    return this.http.get<GranaDTO>(`${API_CONFIGURACAO.urlBase}/grana/${grana_id}`)
  }

}
