import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.page.html',
  styleUrls: ['./contact-add.page.scss'],
})
export class ContactAddPage implements OnInit {
  public contato: Contact = new Contact();

  constructor(
    private contactService: ContactService,
    private toast: ToastController,
    private rota: Router
  ) { }

  ngOnInit() {
  }

  save() {
    this.contactService.insert(this.contato)
      .then(() => {
        console.log("SALVO COM SUCESSO");
        this.rota.navigate(['\contact-list'])
      }).catch(() => console.log("ERRO"));
  }
}
