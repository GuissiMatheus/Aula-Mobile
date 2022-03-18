import { Component, OnInit } from '@angular/core';

import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.page.html',
  styleUrls: ['./lista-categoria.page.scss'],
})
export class ListaCategoriaPage implements OnInit {

  public categorias: Array<Categoria>;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.buscarCategoria();
  }

  public buscarCategoria() {
    this.categoriaService.getCategorias().subscribe(
      (res : Array<Categoria>) => {
        console.log(res)
        this.categorias = res;
    });
  }

  public visualizarCategoria(item) {
    console.log('Item: ', item);
  }

  public editarCategoria(id) {
    console.log('Id: ', id);
  }


}
