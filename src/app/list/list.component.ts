import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  contacts;

  /*
    INJECTION DE DEPENDANCE
    permet de passer à notre component 
    un objet d'une class exterieure
    -> ici on injecte dans ListComponent, un objet de ContactService
  */
  constructor(private contactService: ContactService) {
    console.log(this);
    // maintenant on peut accéder aux propriétés et méthodes du service
    // exemple : this.contactService.getContacts()
  }

  ngOnInit() {
    // Le ngOnInit est une méthode 
    // du cycle de vie d'un component
    this.contacts = [...this.contactService.getContacts()];
  } // fin ngOnInit

  deleteContact(contact) {
    console.log(contact);
    // 1 récuperer l'index du contact dans le tableau
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ? ')) {
      const index = this.contacts.indexOf(contact);
      console.log('index : ', index);
      // 2 utiliser la méthode splice
      // this.contacts.splice(index, 1);
      this.contactService.getContacts().splice(index, 1);
      this.contacts = [...this.contactService.getContacts()];
    }
  }

  searchContact(userInput) {
    console.log(userInput);
    userInput = userInput.toLowerCase();
    // array.filter( (item) => item.first.includes(userInput) )
    this.contacts = this.contactService.getContacts().filter(
      (contact) =>
        contact.first.toLowerCase().includes(userInput) ||
        contact.last.toLowerCase().includes(userInput)
    );
  }

  setFav(contact) {
    console.log(contact);
    this.contactService.setFavToTrueOrFalse(contact)
  }



} // Fin de la class
