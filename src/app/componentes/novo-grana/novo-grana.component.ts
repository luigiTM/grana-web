import { Component, OnInit, Inject } from '@angular/core';
import { GranaDTO } from 'src/app/modelo/grana.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service/armazenamento.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-novo-grana',
  templateUrl: './novo-grana.component.html',
  styleUrls: ['./novo-grana.component.css']
})
export class NovoGranaComponent implements OnInit {

  grana: GranaDTO = {
    id: "",
    nome: "",
    usuario: "",
    codigoDeAcesso: "",
    modificadoEm: ""

  }

  grupoDeFormulario: FormGroup

  constructor(private dialogRef: MatDialogRef<NovoGranaComponent>,
    @Inject(MAT_DIALOG_DATA) data, private armazenamento: ArmazenamentoService, private construtorDeFormulario: FormBuilder) {
    this.grupoDeFormulario = this.construtorDeFormulario.group({
      nome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      usuario: [this.armazenamento.getIdUsuarioLocal(), [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  salvar() {
    this.dialogRef.close(this.grupoDeFormulario.value)
  }

  cancelar() {
    this.dialogRef.close()
  }

}
