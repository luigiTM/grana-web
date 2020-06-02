import { Component, OnInit } from '@angular/core';
import { AutenticarService } from 'src/app/servicos/autenticar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor(private autenticador: AutenticarService, private roteador : Router) { }

  ngOnInit(): void {
  }

  autenticarUsuario(event) {
    console.log(typeof event)
    event.preventDefault()
    const alvo = event.target
    const email = alvo.querySelector("#email").value
    const senha = alvo.querySelector("#senha").value
    this.autenticador.autenticarUsuario(email, senha).subscribe(response => {
      console.log(response)
      this.roteador.navigate(['/inicio'])
    })
  }

}
