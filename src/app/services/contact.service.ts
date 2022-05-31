
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

//import { Storage } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';

import { Contact } from '../models/contact.model';
import { ContactList } from '../models/contact-list.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  insert(contact: Contact) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss")
    return this.storage.set(key, contact);
  }

  remove(key: string) {
    return this.storage.remove(key);
  }

  listAll() {
    let contactList: Array<ContactList> = new Array<ContactList>();

    return this.storage.forEach((value: Contact, key: string, n: Number) => {
      let contact = new ContactList();
      contact.key = key;
      contact.contact = value;
      contactList.push(contact);
    }).then(() => {
      return Promise.resolve(contactList);
    }).catch(error => {
      return Promise.reject(error);
    });
  }
  
}
