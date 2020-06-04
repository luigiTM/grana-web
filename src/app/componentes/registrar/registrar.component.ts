import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../../servicos/registrar.service';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/modelo/credenciais.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  credenciais: CredenciaisDTO = {
    nome: "",
    email: "",
    senha: ""
  }

  grupoDeFormulario: FormGroup

  constructor(public registrar: RegistrarService, public roteador: Router, public construtorDeFormulario: FormBuilder) {
    this.grupoDeFormulario = this.construtorDeFormulario.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario() {
    this.registrar.registrarUsuario(this.grupoDeFormulario.value).subscribe(response => {
      //logar antes de redirecionar, tem que pegar o token
      this.roteador.navigate(['inicio'])
    }, error => {
      let s: string = '';
      let mensagens = error.mensagensCampos
      for (var i = 0; i <= mensagens.lenght; i++) {
        console.log(mensagens.length)
        s = s + mensagens[i].campo + mensagens[i].mensagem
      }
      window.alert(s)
    })
  }

}
