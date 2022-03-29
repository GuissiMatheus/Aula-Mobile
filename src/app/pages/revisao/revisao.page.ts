import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.page.html',
  styleUrls: ['./revisao.page.scss'],
})
export class RevisaoPage implements OnInit {
  public nome: string = 'matheus augusto';
  public img: string = 'https://images.unsplash.com/photo-1508138221679-760a23a2285b';
  public contador: number = 0;

  public valor1: number = 0;
  public valor2: number = 0;
  public resultado: number = 0;

  public time: string;
  public times: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.contador++;
  }

  sub() {
    this.contador--;
  }

  somar() {
    this.resultado = this.valor1 + this.valor2;
  }

  pushLista() {
    this.times.push(this.time);
  }
}
