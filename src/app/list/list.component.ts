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
    ];


  }



}
