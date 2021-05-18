import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dbContacts = [
    { first: 'Fred', last: 'Lo', isFav: true },
    { first: 'Marie', last: 'Be', isFav: false },
    { first: 'Steve', last: 'Jobs', isFav: true },
    { first: 'Mark', last: 'Hello', isFav: false },
  ];

  /* 
  getContacts()
  doit être utilisable dans les components
  */
  getContacts() {
    return this.dbContacts
  }

  setFavToTrueOrFalse(contact) {
    // 1 Rechercher le bon objet dans dbContacts
    const index = this.dbContacts.findIndex(contactInDb => contactInDb == contact); // 1
    // 2 set la propriété isFav à TRUE ou FALSE
    this.dbContacts[index].isFav = !this.dbContacts[index].isFav;
    console.log(this.dbContacts[index].isFav);
    console.log(this.dbContacts)
  }




}
