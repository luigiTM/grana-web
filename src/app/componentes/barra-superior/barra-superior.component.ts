import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from 'src/app/servicos/autenticar.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private roteador: Router, private autenticador : AutenticarService) { }

  ngOnInit(): void {
  }

  mostrarEntrar(){
    return this.roteador.url.match('^/$') || 
           this.roteador.url.match('^/registrar$')
  }

  mostrarRegistrar(){
    return this.roteador.url.match('^/$') || 
           this.roteador.url.match('^/entrar$')
  }

  mostrarPerfil(){
    return this.roteador.url.match('^/inicio$') || 
           this.roteador.url.match('^/novoGrana$')
  }

  mostrarSair(){
    return this.roteador.url.match('^/inicio$')  || 
           this.roteador.url.match('^/novoGrana$')
  }

  sair(){
    this.autenticador.sair()
    this.roteador.navigate(['/'])
  }

}
