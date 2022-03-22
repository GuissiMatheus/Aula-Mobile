import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rota: Router
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  logar() {
    console.log('LOGAR');
    console.log(this.formulario.value);
    this.rota.navigate([`home`]);
  }

  setarFormulario() {
    this.formulario = this.formBuilder.group({
      usuario: [ , Validators.required],
      senha: [ , Validators.required]
    });
  }

}
