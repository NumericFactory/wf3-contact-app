import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // proptiété d'affichage
  favoris = [];
  constructor(private contactService: ContactService) { }

  ngOnInit() {

    /*
      la méthode subscribe du subject fav$
      -> va rééxecuter sa fonction callbak (en paramètre)
         a chaque fois que la donnée dans fav$ va changer
    */
    this.contactService.fav$.subscribe(favs => this.favoris = favs)


  }


}
