import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.page.html',
  styleUrls: ['./lista-produto.page.scss'],
})
export class ListaProdutoPage implements OnInit {
  public produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.buscarProduto();
  }

  public buscarProduto() {
    this.produtoService.getProdutos().subscribe(
      (res : Array<Produto>) => {
        console.log(res)
        this.produtos = res;
    });
  }

  public visualizarProduto(item) {
    console.log('Item: ', item);
  }

  public editarProduto(id) {
    console.log('Id: ', id);
  }

  public deletarProduto(id) {
    console.log('Id: ', id);
  }
}
