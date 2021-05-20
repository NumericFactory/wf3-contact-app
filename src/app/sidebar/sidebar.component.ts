import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../models/contact.interface';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // proptiété d'affichage favoris est un tableau d'object ContactModel
  favoris: ContactModel[] = [];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    /*
      la méthode subscribe du subject fav$
      -> va rééxecuter sa fonction callbak (en paramètre)
         a chaque fois que la donnée dans fav$ va changer
         (par exemple lorsqu'un autre component execute this.contactService.fav$.next(data) )
    */
    this.contactService.fav$.subscribe(favs => this.favoris = favs)

  }


}
