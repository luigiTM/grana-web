import { Component, OnInit } from '@angular/core';
import { GranaService } from 'src/app/servicos/modelo/grana.service';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-grana',
  templateUrl: './novo-grana.component.html',
  styleUrls: ['./novo-grana.component.css']
})
export class NovoGranaComponent implements OnInit {

  grana : GranaDTO = {
    nome: "",
    usuario: "",
    codigoDeAcesso: "",
    modificadoEm:""
    
  }

  grupoDeFormulario: FormGroup

  constructor(private roteador:Router, private granaServico : GranaService,private armazenamento : ArmazenamentoService, private construtorDeFormulario:FormBuilder) { 
    this.grupoDeFormulario = this.construtorDeFormulario.group({
      nome: ['',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]],
      usuario: [this.armazenamento.getUsuarioLocal().id,[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  salvarGrana(){
    this.granaServico.salvarGrana(this.grupoDeFormulario.value).subscribe(response =>{
      this.roteador.navigate(['/inicio'])
    },error=>{
      console.log(error)
    })
  }

}
