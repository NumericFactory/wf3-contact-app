import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contacts;


  constructor() { }

  ngOnInit() {
    // Le ngOnInit est une méthode 
    // du cycle de vie d'un component
    this.contacts = [
      { first: 'Fred', last: 'Lo' },
      { first: 'Marie', last: 'Be' },
      { first: 'Steve', last: 'Jobs' },
      { first: 'Mark', last: 'Hello' },
    ];
  } // fin ngOnInit

  deleteContact(contact) {
    console.log(contact);
    // 1 récuperer l'index du contact dans le tableau
    const index = this.contacts.indexOf(contact);
    console.log('index : ', index);
    // 2 utiliser la méthode splice
    this.contacts.splice(index, 1);
  }



} // Fin de la class
