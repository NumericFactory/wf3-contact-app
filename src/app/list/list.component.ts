import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dbContacts;
  contacts;


  constructor() { }

  ngOnInit() {
    // Le ngOnInit est une méthode 
    // du cycle de vie d'un component
    this.dbContacts = [
      { first: 'Fred', last: 'Lo' },
      { first: 'Marie', last: 'Be' },
      { first: 'Steve', last: 'Jobs' },
      { first: 'Mark', last: 'Hello' },
    ];
    this.contacts = [...this.dbContacts];
  } // fin ngOnInit

  deleteContact(contact) {
    console.log(contact);
    // 1 récuperer l'index du contact dans le tableau
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ? ')) {
      const index = this.contacts.indexOf(contact);
      console.log('index : ', index);
      // 2 utiliser la méthode splice
      this.contacts.splice(index, 1);
    }
  }

  searchContact(userInput) {
    console.log(userInput);
    userInput = userInput.toLowerCase();
    // array.filter( (item) => item.first.includes(userInput) )
    this.contacts = this.dbContacts.filter(
      (contact) =>
        contact.first.toLowerCase().includes(userInput) ||
        contact.last.toLowerCase().includes(userInput)
    );

    //
  }



} // Fin de la class
