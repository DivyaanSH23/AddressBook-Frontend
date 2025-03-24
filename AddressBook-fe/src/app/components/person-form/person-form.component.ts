import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  // styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent {
  person: Person = {
    fullName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
  };

  constructor(
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  addPerson() {
    this.addressBookService.addPerson(this.person);
    this.router.navigate(['/list']); // ✅ Redirect to List Page after adding
  }

  goToList() {
    this.router.navigate(['/list']); // ✅ Navigate back to list page
  }
}
