import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-visualizar-perfil',
  templateUrl: './visualizar-perfil.page.html',
  styleUrls: ['./visualizar-perfil.page.scss'],
})
export class VisualizarPerfilPage implements OnInit {
  public usuario: Usuario = new Usuario();
  
  constructor() { 
    this.usuarioTeste();
  }

  ngOnInit() {
  }

  usuarioTeste() {
    this.usuario = {
      id: 1,
      nome: 'Testando',
      genero: 'Fluido',
      nascimento: '11/11/1111',
      endereco: 'Rua Só Deus Sabe, 42 - Santa Fé do Sul, SP',
      telefone: '(17) 12345-6789',
      email: 'email@email.com',
      senha: '********',
      foto: 'FOTO QUALQUER',
    };
  }
}
