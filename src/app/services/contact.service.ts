import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dbContacts = [
    { first: 'Fred', last: 'Lo' },
    { first: 'Marie', last: 'Be' },
    { first: 'Steve', last: 'Jobs' },
    { first: 'Mark', last: 'Hello' },
  ];

  /* 
  getContacts()
  doit être utilisable dans les components
  */
  getContacts() {
    return this.dbContacts
  }


}
