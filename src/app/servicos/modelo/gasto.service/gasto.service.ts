import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GastoDTO } from 'src/app/modelo/gasto.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private http: HttpClient) { }

  buscarGastosPorGrana(idGrana : String){
    return this.http.get<GastoDTO[]>(`${environment.urlBase}/usuario/${idGrana}`)
  }
}
