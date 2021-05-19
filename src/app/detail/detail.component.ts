import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id;
  // variable à afficher
  contact;

  /* On inject un objet de la class ActivatedRoute */
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
    // 1 récupérer l'ID dans l'url avec ActivatedRoute
    console.log(this.activatedRoute.snapshot.params);
    this.id = this.activatedRoute.snapshot.params.id; // {id: 1, name: 'fred lo'}

    // 2 récupere le bon object contact dans dbContacts 
    //   (dans le service)
    this.contact = this.contactService.getContacts()[this.id];
    console.log(this.contact);


  }

}
