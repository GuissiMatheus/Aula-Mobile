import { Component, OnInit } from '@angular/core';
import { ContactList } from 'src/app/models/contact-list.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  contacts: Array<ContactList> = new Array<ContactList>();

  constructor(private contactService: ContactService) { }

  ngOnInit() { }

  // Função chamada toda vez que esse componente for ser exibido
  ionViewWillEnter() {
    this.contactService.listAll().then(res => {
      this.contacts = res;
      console.log(this.contacts);
    });
  }

}
