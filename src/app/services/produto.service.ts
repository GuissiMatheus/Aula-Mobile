import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private api = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  public getProdutos() {
    return this.http.get(`${this.api}/produto`);
  }

}
