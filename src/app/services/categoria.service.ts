import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private api = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  public getCategorias() {
    return this.http.get(`${this.api}/categorias`);
  }

  public salvarCategoria(categoria: Categoria) {
    return this.http.post(`${this.api}/categorias`, categoria).toPromise();
  }

}
