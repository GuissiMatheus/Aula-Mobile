import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

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
    console.log(this.formulario.value);
    this.produtoService.salvarProduto(this.formulario.value)
    .then(res => {
        console.log(res)
        this.rota.navigate([`teste`])
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
