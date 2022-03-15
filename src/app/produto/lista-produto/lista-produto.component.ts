import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss'],
})
export class ListaProdutoComponent implements OnInit {
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

}
