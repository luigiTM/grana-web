import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GranaService {

  constructor(private http: HttpClient) { }

  buscarGranasPorUsuario(usuario_id: string) {
    return this.http.get<GranaDTO[]>(`${environment.urlBase}/grana/paginado/?usuario=${usuario_id}`)
  }

  salvarGrana(grana : GranaDTO){
    return this.http.post(`${environment.urlBase}/grana`, grana)
  }

  buscarGranaPorId(grana_id : String){
    return this.http.get<GranaDTO>(`${environment.urlBase}/grana/${grana_id}`)
  }

}
