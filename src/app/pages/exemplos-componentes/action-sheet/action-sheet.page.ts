import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController,
    private rota: Router
  ) { }

  ngOnInit() {
  }

  async mostrar() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Teste Action Sheet',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Pagina Inicial',
          role: 'destructive',
          icon: 'home-outline',
          id: 'home-button',
          handler: () => {
            this.rota.navigate([`home`]);
          }
        }, 
        {
          text: 'Lista de Exemplos',
          role: 'destructive',
          icon: 'arrow-undo-outline',
          id: 'voltar-button',
          handler: () => {
            this.rota.navigate([`lista-exemplos`]);
          }
        }, 
        {
          text: 'Fechar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Fechar Action Sheet');
          }
        }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
