import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.page.html',
  styleUrls: ['./formulario-categoria.page.scss'],
})
export class FormularioCategoriaPage implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private rota: Router
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  /**
   * Alterações necessárias:
   * - Validar inputs e formulário
   * - Tratar Erros
   * - Mensagens de sucesso e erro do back
   * - Async e Await pra trocar a rota só depois de salvo
   */

  public salvarCategoria() {
    console.log(this.formulario.value);
    this.categoriaService.salvarCategoria(this.formulario.value)
    .then(res => {
        console.log(res)
        this.rota.navigate([`lista-categoria`])
      }, error => console.log(error));
  }

  setarFormulario() {
    this.formulario = this.formBuilder.group({
      descricao: [ , Validators.required],
      valor: [ , Validators.required],
      marca: [ , Validators.required],
      tipo: [ , Validators.required],
      quantidade: [ , Validators.required]
    })
  }
}
