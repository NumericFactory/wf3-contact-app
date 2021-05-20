import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from '../models/contact.interface';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  // variable à afficher
  contact: ContactModel;

  /* 
  On injecte un objet de la class ActivatedRoute 
  pour récupérer le paramètre de l'url via sa propriété snapshot
  (https://angular.io/api/router/ActivatedRoute)
  */
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
    // 1 récupérer l'ID dans l'url avec ActivatedRoute
    console.log(this.activatedRoute.snapshot.params);
    this.id = parseInt(this.activatedRoute.snapshot.params.id); // {id: 1, name: 'fred lo'}

    // 2 récupere le bon object contact dans dbContacts 
    //   (dans le service)
    this.contact = this.contactService.getContacts()[this.id];
    console.log(this.contact);
  }

}
