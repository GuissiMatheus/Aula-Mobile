import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.page.html',
  styleUrls: ['./formulario-perfil.page.scss'],
})
export class FormularioPerfilPage implements OnInit {
  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rota: Router
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  salvarUsuario() {
    console.log('CADASTRAR USUÁRIO');
    console.log("Usuário:", this.formulario.value);
    this.rota.navigate([`home`]);
  }

  setarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [ , Validators.required],
      genero: [ , Validators.required],
      nascimento: [ , Validators.required],
      endereco: [ , Validators.required],
      telefone: [ , Validators.required],
      email: [ , Validators.required],
      senha: [ , Validators.required],
      foto: [ , Validators.required]
    });
  }

}
