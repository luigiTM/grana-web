import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../../servicos/registrar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private registrar : RegistrarService, private roteador : Router) { }

  ngOnInit(): void {
  }

  registrarUsuario(event) {
    event.preventDefault()
    const alvo = event.target
    const nome = alvo.querySelector("#nome").value
    const email = alvo.querySelector("#email").value
    const senha = alvo.querySelector("#senha").value
    this.registrar.registrarUsuario(nome,email,senha).subscribe(response =>{
      //logar antes de redirecionar, tem que pegar o token
      this.roteador.navigate(['inicio'])
    })
  }

}
