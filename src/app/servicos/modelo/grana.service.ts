import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GranaDTO } from 'src/app/modelo/grana.dto';

@Injectable({
  providedIn: 'root'
})
export class GranaService {

  constructor(private http: HttpClient) { }

  buscarGranasPorUsuario(usuario_id: string) {
    return this.http.get(`api/grana/paginado/?usuario=${usuario_id}`)
  }

  salvarGrana(grana : GranaDTO){
    return this.http.post('api/grana', grana)
  }

}
