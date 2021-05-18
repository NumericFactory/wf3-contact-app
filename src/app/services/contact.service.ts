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

  setFav() {

  }


}
