import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dbContacts = [
    { first: 'Fred', last: 'Lo', isFav: true, email: 'fred@gmail.com', mobile: '0778945612' },
    { first: 'Marie', last: 'Be', isFav: false, email: 'marie@gmail.com', mobile: '011111111' },
    { first: 'Steve', last: 'Jobs', isFav: true, email: 'steve@apple.com', mobile: '022222222' },
    { first: 'Mark', last: 'Hello', isFav: false, email: 'mark@fb.com', mobile: '033333333' },
  ];

  favoris = [];
  /*
    fav$ est un objet de type Subject
    il dispose de 2 méthodes : 
    - this.favs$.next(data)
    - this.favs$.subscribe( callback qui s'éxecutera à chaque changement )
  */
  fav$ = new BehaviorSubject(this.getFavs());
  /* 
  getContacts()
  doit être utilisable dans les components
  */
  getContacts() {
    return this.dbContacts
  }

  getFavs() {
    // 1 Rechercher le bon objet dans dbContacts
    return this.dbContacts.filter(contact => contact.isFav == true); // 1
  }

  setFavToTrueOrFalse(contact) {
    // 1 Rechercher le bon objet dans dbContacts
    const index = this.dbContacts.findIndex(contactInDb => contactInDb == contact); // 1
    // 2 set la propriété isFav à TRUE ou FALSE
    this.dbContacts[index].isFav = !this.dbContacts[index].isFav;
    // 3 je vais envoyer les favoris dans le subject fav$
    this.favoris = this.dbContacts.filter(contact => contact.isFav == true);
    this.fav$.next(this.favoris);
    console.log(this.fav$);
  }




}
