import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {  
  public produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.buscarProduto();
  }

  public buscarProduto() {
    this.produtoService.getProdutos().subscribe(
      (res : Array<Produto>) => {
        this.produtos = res;
    });
  }

  public visualizarProduto(item) {
    console.log('Item: ', item);
  }

  public editarProduto(id) {
    console.log('Id: ', id);
  }

}