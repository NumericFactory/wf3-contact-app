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
    // 1 Recupere la liste des contacts (via le contactService)
    this.favoris = this.contactService.getContacts().filter(
      contact => contact.isFav == true
    );

    // 2 filter pour retourner la liste des contacts isFav = true


  }

}
