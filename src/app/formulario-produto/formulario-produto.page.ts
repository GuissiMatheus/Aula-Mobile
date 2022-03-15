import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.page.html',
  styleUrls: ['./formulario-produto.page.scss'],
})
export class FormularioProdutoPage implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
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

  public salvarProduto() {
    this.produtoService.salvarProduto(this.formulario.value)
    .then(data => {
        console.log(data)
        this.rota.navigate([`home`])
      }, error => console.log(error));
  }

  private setarFormulario() {
    this.formulario = this.formBuilder.group({
      descricao: [ , Validators.required],
      valor: [ , Validators.required],
      marca: [ , Validators.required],
      tipo: [ , Validators.required],
      quantidade: [ , Validators.required]
    })
  }
}
