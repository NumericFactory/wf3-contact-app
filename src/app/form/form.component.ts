import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit(): void {

    /* 
      on crée l'objet contactForm (c'est un ReactiveForm)
      (https://angular.io/guide/reactive-forms)
      à l'aide de la méthode group de la class FormBuilder
      cet objet contactForm est relié au formulaire HTML via <form [formGroup]="contactForm">

      ** group() prend en paramètre un objet qui définit l'objet Contact
      ** on définit les propriétés (first, last email, mobile) 
         Ces propriétés doivent matcher avec les valeurs des attributs formControlName (sur le HTML du des <input>)
      ** La class Validators nous permet de spécifier des règles de validation par champ
         (https://angular.io/guide/reactive-forms#validating-form-input)

         Puis on gère l'affichage des erreurs dans la vue en testant : 
         Par exemple : 
         <p *ngIf="contactForm.controls.last.errors.required">Votre nom est requis</p>
    */
    this.contactForm = this.fb.group({
      first: ['', [Validators.required, Validators.minLength(2)]],
      last: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: '',
      isFav: false
    })
  }// fin ngOnInit

  /**
   * 
   * @param contactForm 
   * Role : mettre à jour le tableau de Contacts et mettre à jour le subject dbContacts$
   *        Le ListComponent peut alors subscribe à dbonctact$ 
   *        pour récupere le nouveau tableau de contacts à jour après l'ajout
   */
  addContact(contactForm: FormGroup) {
    console.log(contactForm);
    this.isSubmitted = true;
    if (contactForm.valid) {
      this.contactService.dbContacts = [contactForm.value, ...this.contactService.dbContacts];
      this.contactService.dbContact$.next(this.contactService.dbContacts);
      this.router.navigate(['/']);
    }
  }

}
