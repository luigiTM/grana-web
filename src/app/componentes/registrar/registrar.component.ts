import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../../servicos/registrar.service/registrar.service';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/modelo/credenciais.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticarService } from 'src/app/servicos/autenticar.service/autenticar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css', '/src/app/app.component.css']
})
export class RegistrarComponent implements OnInit {

  credenciais: CredenciaisDTO = {
    nome: "",
    email: "",
    senha: ""
  }

  grupoDeFormulario: FormGroup

  constructor(private autenticador: AutenticarService, private registrador: RegistrarService, private roteador: Router, private construtorDeFormulario: FormBuilder) {
    this.grupoDeFormulario = this.construtorDeFormulario.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario() {
    this.registrador.registrarUsuario(this.grupoDeFormulario.value).subscribe(response => {
      this.autenticador.autenticarUsuario(this.grupoDeFormulario.value).subscribe(response => {
        this.autenticador.autorizouUsuario(response.headers.get('Authorization'))
        this.roteador.navigate(['inicio'])
      }, error => {
        console.log(error)
      })
    }, error => {
      let s: string = '';
      let mensagens = error.mensagensCampos
      for (var i = 0; i < mensagens.length; i++) {
        s = s + mensagens[i].mensagem + '\n'
      }
      window.alert(s)
    })
  }

}
