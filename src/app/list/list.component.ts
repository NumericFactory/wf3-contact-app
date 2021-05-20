import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ContactModel } from '../models/contact.interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // le tableau d'objets Contacts pour afficher la liste dans list.component.html
  contacts: ContactModel[];

  /*
    INJECTION DE DEPENDANCE
    permet de passer à notre component, en paramètre de la méthode constructor
    un objet d'une class exterieure
    -> ici on injecte contactService de la class ContactService
  */
  constructor(private contactService: ContactService) {
    console.log(this);
    // maintenant on peut accéder aux propriétés et méthodes du service
    // exemple : this.contactService.getContacts()
  }

  ngOnInit(): void {
    // Le ngOnInit est une méthode 
    // du cycle de vie d'un component
    //this.contacts = [...this.contactService.getContacts()];
    this.contactService.dbContact$.subscribe(data => this.contacts = data)
  }

  /**
   * deleteContact 
   * Role : réagie au click sur la suppression d'un contact (dans list.component.html)
   * @param contact 
   * @param e 
   */
  deleteContact(contact: ContactModel, e): void {
    e.stopPropagation();
    console.log(contact);
    // 1 récuperer l'index du contact dans le tableau
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ? ')) {
      const index: number = this.contacts.indexOf(contact);
      console.log('index : ', index);
      // 2 utiliser la méthode splice 
      //   pour effacer le contact dans dbContacts (dans le service)
      this.contactService.getContacts().splice(index, 1);
      this.contactService.dbContact$.next(this.contactService.getContacts());
      // on récupere le nouveau tableau des favoris
      let favoris = this.contactService.getFavs();
      this.contactService.fav$.next(favoris);
    }
  }

  /**
   * searchContact
   * Role filtrer le tableau local selon la saisie de l'utilisateur
   * (l'utilisateur peut rechercher un contact par son prénom ou son nom)
   * @param userInput 
   */
  searchContact(userInput): void {
    console.log(userInput);
    userInput = userInput.toLowerCase();
    // array.filter( (item) => item.first.includes(userInput) )
    this.contacts = this.contactService.getContacts().filter(
      (contact) =>
        contact.first.toLowerCase().includes(userInput) ||
        contact.last.toLowerCase().includes(userInput)
    );
  }

  /**
   * setFav()
   * Role : Setter la propriété isFav de l'objet contact
   * @param contact 
   * @param e 
   */
  setFav(contact: ContactModel, e): void {
    e.stopPropagation();
    console.log(contact);
    this.contactService.setFavToTrueOrFalse(contact)
  }

  /**
   * getColor
   * Role : retourner la couleur orange ou black pour l'étoile du bouton favori
   * @param contact
   * @returns string
   */
  getColor(contact: ContactModel) {
    return contact.isFav ? 'orange' : 'black';
  }



} // Fin de la class
