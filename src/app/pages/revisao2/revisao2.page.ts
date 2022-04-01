import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-revisao2',
  templateUrl: './revisao2.page.html',
  styleUrls: ['./revisao2.page.scss'],
})
export class Revisao2Page implements OnInit {
  public formulario: FormGroup;
  public media: number;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  async calcular() {
    let notas = this.formulario.value;
    this.media = (notas['nota1'] + notas['nota2'] + notas['nota3'] + notas['nota4']) / 4;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Resultado',
      message: `
        <p>Nota 1: ${notas['nota1']}</p>
        <p>Nota 2: ${notas['nota2']}</p>
        <p>Nota 3: ${notas['nota3']}</p>
        <p>Nota 4: ${notas['nota4']}</p>
        <p><b>Média:</b> ${this.media}</p>`,
      buttons: ['OK']
    });
  
    alert.present();
    const toast = await this.toastController.create({
      message: (this.media >= 6) ? 'APROVADO!' : 'REPROVADO!',
      duration: 2000
    });
    toast.present();
  }

  setarFormulario() {
    this.formulario = this.formBuilder.group({
      nota1: [ , Validators.required],
      nota2: [ , Validators.required],
      nota3: [ , Validators.required],
      nota4: [ , Validators.required]
    });
  }
}
